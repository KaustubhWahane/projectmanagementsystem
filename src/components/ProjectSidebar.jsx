export default function ProjectSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-100 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-red-500 text-stone-950 hover:text-stone-100 font-jersey">+ Add Project</button>
            </div>
        <ul>
        </ul>
    </aside>
  )
}
