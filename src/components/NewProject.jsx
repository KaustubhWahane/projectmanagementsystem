import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
      <a href="#" class="relative z-10 block w-28 h-12 text-lg font-semibold text-[#00a84f] bg-gradient-to-r from-[#006175] to-[#00a950] rounded-full p-1 hover:text-white transition-all">
      <span class="flex items-center justify-center h-full w-full bg-[#0e0e10] rounded-full transition-colors duration-500 ease-in-out hover:bg-transparent"> Cancel</span>
</a>

      <a href="#" class="relative z-10 block w-28 h-12 text-lg font-semibold text-[#00a84f] bg-gradient-to-r from-[#006175] to-[#00a950] rounded-full p-1 hover:text-white transition-all">
        <span class="flex items-center justify-center h-full w-full bg-[#0e0e10] rounded-full transition-colors duration-500 ease-in-out hover:bg-transparent"> Save</span>
      </a>
      </menu>
      <div>
       <Input label= "Title"/>
       <Input label= "Description" textarea />
       <Input label= "Due Date"/>
      </div>
    </div>
  )
}
