import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type RouteParams = Record<string, string>;

interface RouterContextType {
  currentPath: string;
  params: RouteParams;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
  const [params] = useState<RouteParams>({});

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, params, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (context === undefined) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

export function useParams() {
  const { params } = useRouter();
  return params;
}

interface RouteProps {
  path: string;
  element: React.ReactNode;
}

export function Route({ path, element }: RouteProps) {
  const { currentPath } = useRouter();
  
  // Simple path matching
  const matchPath = (routePath: string, current: string): RouteParams | null => {
    const routeParts = routePath.split('/').filter(Boolean);
    const currentParts = current.split('/').filter(Boolean);
    
    if (routeParts.length !== currentParts.length && !routePath.includes(':')) {
      return null;
    }
    
    const params: RouteParams = {};
    
    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(':')) {
        params[routeParts[i].slice(1)] = currentParts[i] || '';
      } else if (routeParts[i] !== currentParts[i]) {
        return null;
      }
    }
    
    return params;
  };
  
  const match = matchPath(path, currentPath);
  
  if (match) {
    return <>{element}</>;
  }
  
  return null;
}

interface RoutesProps {
  children: React.ReactNode;
}

export function Routes({ children }: RoutesProps) {
  const { currentPath } = useRouter();
  
  // Find matching route
  let matchedElement: React.ReactNode = null;
  
  React.Children.forEach(children, (child) => {
    if (matchedElement) return;
    
    if (React.isValidElement(child) && child.type === Route) {
      const { path, element } = child.props as RouteProps;
      
      const routeParts = path.split('/').filter(Boolean);
      const currentParts = currentPath.split('/').filter(Boolean);
      
      let matches = true;
      
      for (let i = 0; i < Math.max(routeParts.length, currentParts.length); i++) {
        if (routeParts[i]?.startsWith(':')) {
          // Dynamic segment, always matches
        } else if (routeParts[i] !== currentParts[i]) {
          matches = false;
          break;
        }
      }
      
      if (matches) {
        matchedElement = element;
      }
    }
  });
  
  return <>{matchedElement}</>;
}

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ to, children, className }: LinkProps) {
  const { navigate, currentPath } = useRouter();
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };
  
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <a 
      href={`#${to}`} 
      onClick={handleClick}
      className={`${className || ''} ${isActive ? 'active' : ''}`}
    >
      {children}
    </a>
  );
}

export function Navigate({ to }: { to: string }) {
  const { navigate } = useRouter();
  
  useEffect(() => {
    navigate(to);
  }, [navigate, to]);
  
  return null;
}
