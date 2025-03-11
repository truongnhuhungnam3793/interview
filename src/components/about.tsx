const About = () => {
  return (
    <section className="section__about">
      <h2 className="section__title text--center">Lorem ullamco</h2>
      <div className="section__content">
        <div className="gallery">
          <div className="gallery__item">
            <picture>
              <source
                srcSet="/images/about/1-sp.jpg"
                media="(max-width: 767.98px)"
              />
              <img
                src="/images/about/1.jpg"
                alt="Gallery Image 1"
                loading="lazy"
              />
            </picture>
          </div>
          <div className="gallery__item">
            <picture>
              <source
                srcSet="/images/about/2-sp.jpg"
                media="(max-width: 767.98px)"
              />
              <img
                src="/images/about/2.jpg"
                alt="Gallery Image 2"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
        <p className="section__text text--center font-lato">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur
          eiusmod consectetur proident Lorem reprehenderit esse do anim velit in
          aliquip dolore ut officia. Consectetur reprehenderit proident do
          exercitation eu. Sunt fugiat pariatur elit est laboris quis. Esse
          mollit incididunt quis amet. Qui non irure incididunt laborum nisi
          cillum consequat aliquip aliquip cillum in. Ut excepteur labore
          voluptate tempor cupidatat dolor eiusmod do ipsum Lorem cupidatat do
          labore. <br />
          <br />
          Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur. Non
          excepteur sunt reprehenderit sit ex ullamco eiusmod Lorem incididunt
          nisi mollit nostrud. Irure velit enim elit minim commodo qui culpa
          cillum duis fugiat consequat pariatur.
        </p>
      </div>
    </section>
  )
}
export default About
