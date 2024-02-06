export default function TicketNum({num}){
let styles={style:{
        display: 'inline-block',
        padding: '8px 12px',
        margin: '8px',
        backgroundColor: 'red',
        borderRadius:' 5px',
        border: '1px solid #ccc',
        fontSize: '18px',
      }
}

return <span style={styles.style}>{num}</span> ;
}