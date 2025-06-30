"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/app/hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider
      swipeDirection="right"
      duration={4000}
    >
      {toasts.map(({ id, title, description, action, variant, ...props }) => {
        const mappedVariant = variant === "destructive" ? "destructive" : "default"
        return (
          <Toast key={id} variant={mappedVariant} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}

      <ToastViewport className="fixed top-4 right-4 z-[9999]" /> {/* moved className here */}
    </ToastProvider>
  )
}
