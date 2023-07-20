import { ReactNode } from "react";

const Col: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className="grid grid-rows-6 grid-flow-col gap-4 border-2 border-red-600">
            {children}
        </div>
    )
}


export default Col;