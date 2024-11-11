import React from 'react'

const InfoSection = () => {
  return (
    <section>
  <div
    style={{
      margin: '0 auto',
      maxWidth: '1536px', // max-w-screen-2xl
      padding: '4rem 1rem', // px-4 py-16
      paddingLeft: '1.5rem', // sm:px-6 for small screens
      paddingRight: '2rem', // lg:px-8 for large screens
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        height: 'auto',
      }} className='my-grid-cont'
    >
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: '4rem',
          '@media (min-width: 1024px)': {
            paddingTop: '16px', // lg:py-16 for large screens
          },
        }}
      >
        <div
          style={{
            position: 'relative',
            height: '16rem', // h-64
          }} className='my-grid-img-cont'
        >
          <img
            alt=""
            src="https://media.autoexpress.co.uk/image/private/s--rCzrE96y--/f_auto,t_content-image-full-desktop@1/v1729070528/autoexpress/2024/10/Tesla%20Cybertruck%20Cyberbeast.jpg"
            style={{
              position: 'absolute',
              inset: 0,
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f3f4f6', // bg-gray-100
        }}
      >
        <span
          style={{
            display: 'none',
            position: 'absolute',
            insetY: 0,
            right: '-4rem', // lg:-start-16
            width: '4rem', // lg:w-16
            backgroundColor: '#f3f4f6', // lg:bg-gray-100
          }} className='my-grid-span'
        ></span>

        <div
          style={{
            padding: '2rem', // p-8
          }} className='info-h'
        >
          <h2
            style={{
              fontSize: '1.5rem', // text-2xl
              fontWeight: 'bold',
              '@media (min-width: 640px)': { fontSize: '1.875rem' }, // sm:text-3xl
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
          </h2>

          <p
            style={{
              marginTop: '1rem', // mt-4
              color: '#4b5563', // text-gray-600
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
            esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
            architecto eius quis quibusdam fugiat dicta.
          </p>

          <a
            href="#"
            style={{
              marginTop: '2rem', // mt-8
              display: 'inline-block',
              borderRadius: '0.375rem', // rounded
              border: '1px solid #6366f1', // border-indigo-600
              backgroundColor: '#6366f1', // bg-indigo-600
              padding: '0.75rem 3rem', // px-12 py-3
              fontSize: '0.875rem', // text-sm
              fontWeight: 'medium',
              color: '#ffffff', // text-white
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#6366f1'; // hover:text-indigo-600
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#6366f1';
              e.target.style.color = '#ffffff';
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default InfoSection