import PropTypes from 'prop-types';

const PrintBookM = ({data}) => {
   const {title}=data
    return (
        <>
        <h2 className="bg-white p-3 rounded-lg text-xl font-bold mb-3 ">{title}</h2 >
        </>         
    )
}
PrintBookM.propTypes={
data:PropTypes.object.isRequired,

    
}
export default PrintBookM;