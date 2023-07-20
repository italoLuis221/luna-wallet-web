'use client'

import Button from '@/components/Button';
import DateInput from '@/components/DateInput';
import NumberInput from '@/components/NumberInput';
import TextInput from '@/components/TextInput';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';


const validateSchema = z.object({
    nome: z.string()
    .nonempty("O nome é obrigatório"),
    email: z.string()
    .nonempty("O e-mail é obrigatório")
    .email("O e-mail informado não tem um formato válido"),
    cpf: z.string()
    .nonempty("O cpf é obrigatório")
    .transform((value) => value.replace(/\D/g,"")),
    dataNascimento: z.coerce.date(),
    senha: z.string()
    .nonempty("A senha é obrigatória")
    .min(8,"A senha precisa um minímo de 8 caracteres")
});

type formData  = z.infer<typeof validateSchema>

const CadastroUsuario = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<formData>({resolver: zodResolver(validateSchema)});

    const onSubmit = (data:formData) => {
        console.log(data);
    }

    return (
        <section className="p-3 md:shadow-lg md:shadow-luna w-full md:w-1/2 lg:w-1/3">
  
                <header className='flex justify-center mb-10'>
                    <Image 
                        src="/images/logotipo.png"
                        alt='luna wallet logotipo'
                        width={180}
                        height={76}
                    />
                </header>
                <main>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                        <div>
                            <TextInput label='Nome' {...register('nome')}/>
                            {errors.nome && <span className='text-red-600'>{errors.nome.message}</span>}   
                        </div>     
                        <div>
                            <TextInput label='E-mail' type='email' {...register('email')}/>
                            {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
                        </div>
                        <div>
                            <NumberInput label='CPF' mask='###.###.###-##' {...register('cpf')}/>
                            {errors.cpf && <span className='text-red-600'>{errors.cpf.message}</span>}
                        </div> 
                        <div>
                            <DateInput label='Data de Nascimento' placeholder='10/02/1997' {...register('dataNascimento')}/>
                            {errors.dataNascimento && <span className='text-red-600'>{errors.dataNascimento.message}</span>}
                        </div>
                        <div>
                            <TextInput label='Senha' type='password' placeholder='Mínimo 8 Caracteres' {...register('senha')}/>
                            {errors.senha && <span className='text-red-600'>{errors.senha.message}</span>}
                        </div>

                        <div className='mt-4'>
                            <Button type='submit'>Salvar</Button>
                        </div>
                    </form>
                </main>          
        </section>
    )
}

export default CadastroUsuario;