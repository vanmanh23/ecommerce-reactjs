
type CategoryProps = {
    name: string,
    imageUri: string
}
export default function CategoryCard({name, imageUri}: CategoryProps) {
  return (
    <div className="flex flex-col items-center gap-2">
        <div >
            <img src={imageUri} alt={name} className="w-20 rounded-full"/>
        </div>
        <div>
            <h3>{name}</h3>
        </div>
    </div>
  )
}
