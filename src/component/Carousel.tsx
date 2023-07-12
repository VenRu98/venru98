type ImageListType = {
    data: {
        id: string
        id_before: string
        id_after: string
        src: string
    }[]
}

function Carousel({ data }: ImageListType) {
    return (
        <div className="carousel carousel-center max-w-md m-4 space-x-4 bg-neutral rounded-box ">
            {data.map(({ id_before, id_after, id, src }) => (
                <div id={id} className="carousel-item relative w-full ">
                    <img src={src} className="flex justify-center w-full object-contain" alt={id}/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={'#' + id_before} className="btn btn-circle">❮</a>
                        <a href={'#' + id_after} className="btn btn-circle">❯</a>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Carousel;