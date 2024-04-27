import { Buscador } from "./buscador"

export const Hero = () => {
    return ( 
      
            <div className="hero min-h-screen" style={{backgroundImage: 'url(/hero.jpeg)'}}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                <div className="grid grid-cols-2 gap-4 absolute top-52 left-0 w-full " >
                    <div className="relative">
                        <div className= "content-start ml-3">
                            <h1 className="mb-5 text-5xl font-extra-bold">Inmobiliaria Pommarés</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                
                    <div className="relative top-60">
                        <Buscador/>
                    </div>
                </div>
                </div>
            </div>
            
    )
}