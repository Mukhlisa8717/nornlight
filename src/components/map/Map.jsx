import React from 'react'
import './Map.scss'

const Map = () => {
  return (
    <div className='map'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12109.925029926811!2d69.14351698703503!3d41.266665573298994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8945796d0f6d%3A0x1365a38c5b9f65b2!2z0JDQu9Cz0L7RgNC40YLQvA!5e0!3m2!1sru!2s!4v1719851358866!5m2!1sru!2s"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map
