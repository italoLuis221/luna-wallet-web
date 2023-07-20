import { Children, ReactNode } from "react";
import Button from './Button'

const Form: React.FC<{ title: string, children: ReactNode }> = ({ title, children }) => {
    return (
      <div className="grow border-2 pt-10">
        <section className="border shadow-sm shadow-luna rounded-lg bg-white m-auto w-full md:w-6/12">
            <header className="flex justify-center items-center text-white font-medium h-10 rounded-lg bg-luna  opacity-70">
                {title}
            </header>
            <main className="p-4">
                <form>
                    {children}
                </form>
            </main>
            <footer className="border box-content rounded-lg text-right h-10 p-1  bg-gray-50 mt-4">
                <Button type="submit">Salvar</Button>
            </footer>
        </section>
      </div>
    );
  };
  
  export default Form;
  