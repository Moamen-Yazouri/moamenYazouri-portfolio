    "use client"

    import { easeInOut, motion } from "framer-motion"
    import { Button } from "@/components/ui/button"
    import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
    import { AlertTriangle, RefreshCw, Home, ArrowLeft } from "lucide-react"

    interface ErrorFallbackProps {
    error?: Error
    reset?: () => void
    title?: string
    description?: string
    showHomeButton?: boolean
    showBackButton?: boolean
    className?: string
    }

    export function ErrorFallback({
    error,
    reset,
    title = "Something went wrong",
    description = "We encountered an unexpected error. Please try again or contact support if the problem persists.",
    showHomeButton = true,
    showBackButton = false,
    className = "",
    }: ErrorFallbackProps) {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    }

    const iconVariants = {
        initial: { scale: 1, rotate: 0 },
        animate: {
        scale: [1, 1.1, 1],
        rotate: [0, -5, 5, 0],
        transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: easeInOut,
        },
        },
    }

    return (
        <div
        className={`min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--muted)/0.1)] to-[hsl(var(--destructive)/0.05)] ${className}`}
        >
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-md">
            <Card className="bg-card/50 backdrop-blur-lg border border-border/50 shadow-xl">
            <CardHeader className="text-center pb-4">
                <motion.div
                variants={iconVariants}
                initial="initial"
                animate="animate"
                className="mx-auto mb-4 w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center"
                >
                <AlertTriangle className="h-8 w-8 text-destructive" />
                </motion.div>
                <motion.div variants={itemVariants}>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">{title}</CardTitle>
                </motion.div>
            </CardHeader>
            <CardContent className="text-center space-y-6">
                <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed">
                {description}
                </motion.p>

                {error && (
                <motion.details
                    variants={itemVariants}
                    className="text-left bg-muted/30 rounded-lg p-4 border border-border/30"
                >
                    <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Error Details
                    </summary>
                    <pre className="mt-2 text-xs text-destructive font-mono overflow-auto max-h-32">{error.message}</pre>
                </motion.details>
                )}

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center">
                {reset && (
                    <Button onClick={reset} className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                    <RefreshCw className="h-4 w-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                    Try Again
                    </Button>
                )}

                {showHomeButton && (
                    <Button
                    variant="outline"
                    onClick={() => (window.location.href = "/")}
                    className="group hover:bg-muted/50"
                    >
                    <Home className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Go Home
                    </Button>
                )}

                {showBackButton && (
                    <Button variant="ghost" onClick={() => window.history.back()} className="group hover:bg-muted/30">
                    <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                    Go Back
                    </Button>
                )}
                </motion.div>
            </CardContent>
            </Card>
        </motion.div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-destructive/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
        </div>
        </div>
    )
    }
