import { ReactNode } from "react"

const Row: React.FC<{children?: ReactNode}> = ({children}) => {
    return (
        <div className="grid grid-cols-12 gap-4">
            {children}
        </div>
    )
}

export default Row;