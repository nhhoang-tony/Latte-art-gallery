export default function ZoomPhoto({ photoPath, hidePhoto }) {
  return (
    <div
      className='fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center animation'
      onClick={hidePhoto}
    >
      <div className='fixed w-full h-screen bg-[#0f0e18] opacity-95 z-0'></div>
      {photoPath.includes('jpeg') && (
        <img
          src={`/static/img/${photoPath}`}
          className='fixed max-w-[700px] max-h-[700px] w-[95%] rounded-3xl z-10 brightness-110 bg-[#091712f2]'
          loading='lazy'
        ></img>
      )}
      {photoPath.includes('mp4') && (
        <video
          className='fixed max-w-[700px] max-h-[700px] w-[95%] rounded-3xl z-10 brightness-110'
          src={`/static/img/${photoPath}`}
          loop
          autoPlay
          muted
        ></video>
      )}
    </div>
  );
}
