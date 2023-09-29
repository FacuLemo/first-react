export default function Saludos({mensaje='hola', width=300, height=200}){

    return(
        <svg width={width} height={height}>
            <rect width="100%" height="100%" fill="#f0faa3" />
            <circle cx={Math.floor(width*0.66)} cy={height/2} r={height/3} fill="blue" stroke="black" />
            <polygon points="120,0 240,225 0,225" fill="green"/>
            <text x="150" y={height/2} font-family="Times" font-size={75}
            fill="white" stroke="black" stroke-width="2">
            {mensaje}
            </text>
        </svg>
    )
}