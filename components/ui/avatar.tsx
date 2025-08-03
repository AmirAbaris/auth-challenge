import * as React from 'react';

interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'default' | 'sm' | 'lg';
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size = 'default', children, ...props }, ref) => {
    const sizeClasses = {
      default: 'h-10 w-10',
      sm: 'h-8 w-8',
      lg: 'h-12 w-12',
    };
    
    return (
      <span
        ref={ref}
        className={`relative flex shrink-0 overflow-hidden rounded-full ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Avatar.displayName = 'Avatar';

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <img
      ref={ref}
      className={`aspect-square h-full w-full ${className}`}
      {...props}
    />
  )
);
AvatarImage.displayName = 'AvatarImage';

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLSpanElement> {}

const AvatarFallback = React.forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}
      {...props}
    />
  )
);
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };
