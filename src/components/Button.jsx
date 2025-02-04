export default function Button({children , ...props}) {
    return (
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-red-500 text-stone-950 hover:text-stone-100 font-jersey" 
            {...props}
           >
            {children}
        </button>
      )
    }
    