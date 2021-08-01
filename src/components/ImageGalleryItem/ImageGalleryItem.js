// import ImageGalleryItem from './components/ImageGalleryItem'

export default function ImageGalleryItem({ pokemon: { sprites, name, stats } }) {
    return (
        <div>
            <img
                // src={sprites.other['official-artwork'].front_default}
                width="240"
                alt={name}
            />
            <h2>{name}</h2>
            <ul>
                {stats.map(entry => (
                    <li key={entry.stat.name}>
                    { entry.stat.name }:{entry.base_stat}
                </li>
            ))}
            </ul>
            {/* <li className="ImageGalleryItem">
                <img src="" alt="" className="ImageGalleryItem-image" />
            </li> */}

        </div>
    )
}