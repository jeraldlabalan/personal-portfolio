import styles from './WorkStyles.module.css'
import Works from './Works'

function Work() {
  return (
    <section className={`${styles.work} section`} id='portfolio'>

      <h2 className="section__title">
        Portfolio
      </h2>

        <Works />

    </section>
  )
}

export default Work