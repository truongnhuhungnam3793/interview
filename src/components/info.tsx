const Info = () => {
  return (
    <section className="section__info">
      <div className="section__content">
        <div className="info__item">
          <div className="info__content">
            <h3 className="info__title">Lorem ipsum</h3>
            <ul className="info__list font-lato">
              <li>
                <h4 className="info__headline">
                  Excepteur eiusmod consectetur
                </h4>
                <p className="info__text">
                  Proident dolore nisi eiusmod excepteur aliquip esse ut
                  excepteur. Non excepteur sunt reprehenderit sit ex ullamco
                  eiusmod Lorem incididunt nisi mollit nostrud. Irure velit enim
                  elit minim commodo qui culpa cillum duis fugiat consequat
                  pariatur.
                </p>
              </li>
              <li>
                <h4 className="info__headline">Quis aliqua reprehenderit</h4>
                <p className="info__text">
                  Proident dolore nisi eiusmod excepteur aliquip esse ut
                  excepteur. Non excepteur sunt reprehenderit sit ex ullamco
                  eiusmod Lorem incididunt nisi mollit nostrud. Irure velit enim
                  elit minim commodo qui culpa cillum duis fugiat consequat
                  pariatur.
                </p>
              </li>
              <li>
                <h4 className="info__headline">
                  Ad sit cillum amet duis quis commodo
                </h4>
                <p className="info__text">
                  Proident dolore nisi eiusmod excepteur aliquip esse ut
                  excepteur. Non excepteur sunt reprehenderit sit ex ullamco
                  eiusmod Lorem incididunt nisi mollit nostrud. Irure velit enim
                  elit minim commodo qui culpa cillum duis fugiat consequat
                  pariatur.
                </p>
              </li>
            </ul>
          </div>
          <div className="info__image">
            <picture>
              <source
                srcSet="/images/info/1-sp.jpg"
                media="(max-width: 767.98px)"
              />
              <img src="/images/info/1.jpg" alt="Info Image 1" loading="lazy" />
            </picture>
          </div>
        </div>
        <div className="info__item">
          <div className="info__content">
            <h3 className="info__title">Mollit aliquip do ipsum consectetur</h3>
            <p className="info__text font-lato">
              Ex laborum ea qui consectetur mollit commodo eiusmod culpa dolor
              cupidatat. Ullamco dolore irure ea sit elit velit non officia. Ad
              eu reprehenderit in et voluptate mollit. Reprehenderit incididunt
              magna consequat enim sit eiusmod est dolor laborum cupidatat.{" "}
              <br />
              <br />
              Ipsum minim mollit irure dolore. Sint fugiat deserunt dolor aute
              enim et cillum adipisicing cillum nostrud anim. Sit dolore
              incididunt dolore do sunt pariatur consectetur id qui pariatur eu
              incididunt adipisicing. Irure sint fugiat officia veniam
              consectetur. Esse laborum amet aliqua ad in sunt labore duis.
            </p>
          </div>
          <div className="info__image">
            <picture>
              <source
                srcSet="/images/info/2-sp.jpg"
                media="(max-width: 767.98px)"
              />
              <img src="/images/info/2.jpg" alt="Info Image 2" loading="lazy" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Info
