import noProjectImage from '../assets/no-projects.png'
import Button from './Button'

export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
        <img src={noProjectImage} alt="Error 404" className='w-16 h-16 object-contain mx-auto' />
        <h2 className='text-xl font-bold text-stone-500 mt-4'>No Project Selected</h2>
        <p className='mt-8'>
            <Button onClick = {onStartAddProject}>Create new Project??</Button>
        </p>
    </div>
  )
}
