export default function Circle({width=300, height=200}){
    let cxCircle=Math.floor(width/2)
    let cyCircle=Math.floor(height/2)
    return(
        <svg
            version="1.1"
            baseProfile="full"
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg">
            <rect width={width} height={height} fill="green" />
            <circle cx={cxCircle} cy={cyCircle} r={Math.floor(cyCircle/1.5)} fill="red" />
        </svg>

    )
}