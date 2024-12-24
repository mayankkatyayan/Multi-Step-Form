'use client';

import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';

import { cn } from '@/lib/utils';

export const ToastProvider = ToastPrimitive.Provider;

export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      'fixed bottom-0 right-0 flex max-w-xs flex-col gap-2 p-4',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

export const Toast = ToastPrimitive.Root;
export const ToastContent = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={cn('bg-gray-900 text-white px-4 py-2 rounded shadow-lg', className)}
    {...props}
  />
));
ToastContent.displayName = ToastPrimitive.Title.displayName;
