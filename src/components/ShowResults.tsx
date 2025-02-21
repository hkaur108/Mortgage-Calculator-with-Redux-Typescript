export default function ShowResults() {
  return (
          <aside id='aside' className="px-2 py-3 my-5 text-center" aria-label="Empty result container">
            <figure>
              <img className="empty-image" src='/assets/images/illustration-empty.svg' alt='empty result image' style={{width:"125px"}}/>
              <figcaption className='d-none'>this is the empty result image</figcaption>
            </figure>
              <h2 className='fw-bold fs-5'>Results shown here</h2>
            <p className='text-mute'>
              Complete the form and click "calculate repayments to see what your monthly repayments would be."
            </p>
          </aside>
  )
}
