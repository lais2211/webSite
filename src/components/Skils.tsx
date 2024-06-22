import React from 'react';
import SkilsItem from './SkilsItem';

const Skils = () => {
    return <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>
            Educação & <span className='text-yellow-400'>Habilidades</span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <div>
            <SkilsItem title="Desenvolvedora Mobile e Web" year="2022-actual" resume='Trabalhei em projetos de estudos, como freelancer e para empresas privadas,utilizando de flutter e dart como linguagens principais e também tendo contato com ReactJs. Uma das empresas de grande porte a qual prestei serviços recentemente é uma empresa de e-commerce peruana chamada Favo. '/>
            </div>
            <div>
            <SkilsItem title="Pós graduação" year="2022" resume='Pós graduação em desenvolvimento mobile. Abrangendo desde designer com Ux e Ui, linguagens nativas e hibridas para desenvolvimento, um pouco sobre backend como Java, inteligencia artificial e boas praticas.'/>
            </div>
            <div>
            <SkilsItem title="Analista de QA" year="2022" resume='Trabalhei com a equipe de testes da claro em projetos de grande escala, treinei equipes, utilizava de postman, cucumber, soapUi e ci/cd para testes. Documentava os processos com detalhes utilizando word e excel para descrição de casos.'/>
            </div>
            <div>
            <SkilsItem title="Analista Programadora" year="2021-2023" resume='Liderei e desenvolvi em projetos para a empresa Claro, incluindo projeto de grande escala como LGPD e Netflix, desenvolvi apis e proxys com a plataforma Apigee, participava do processo desde as reuniões e criação de documentações até a subida em produção. 
            Liderei para treinamentos de equipe e criei documentações de suporte.'/>
            </div>
            <div>
            <SkilsItem title="Desenvolvedora Backend" year="2021" resume='Desenvolvia apis como freelancer utilizando de Java e Spring Boot. Criava documentações para consulta com swagger, versionamento de código utilizando Git e GitHub e testes com postman. '/>
            </div>
        </div>
    </div>
}

export default Skils;