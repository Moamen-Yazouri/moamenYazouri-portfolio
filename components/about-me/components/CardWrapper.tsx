import { Card } from '@/components/ui/card'
import React from 'react'
interface IProps {
    children: React.ReactNode
    gradient: string
}
const CardWrapper = ({children, gradient}: IProps) => {
  return (
    <Card className={`h-full relative overflow-hidden border border-border shadow-xl backdrop-blur-md ${gradient}`}>
      <div className="absolute inset-0 pointer-events-none z-0" />
      <div className="relative z-10">{children}</div>
    </Card>
  )
}

export default CardWrapper;