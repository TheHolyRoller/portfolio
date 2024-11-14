import React from 'react'; 
import b from '../Styles/Button.module.css'; 


function Button() {
  return (
    <div className="flex items-center justify-center mb-2" id={b.buttonContainer}  >
    <button  id={b.button} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
<span id={b.buttonEffect}  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
<span id={b.buttonText}  className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
  Border Magic
</span>
</button>   
    </div>
  )
}

export default Button