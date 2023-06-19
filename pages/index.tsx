import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personal Information Collector</title>
      </Head>
      <div className='flex flex-col'>
        <form action='/submit' method='POST'>
          <h1>Sensitive Data Collector</h1>
          <p>
            Required fields are followed by{' '}
            <strong>
              <span aria-label='required'>*</span>
            </strong>
          </p>
          <section>
            <h2>Personal Information</h2>
            <p>
              <label htmlFor='name'>
                <span>Name</span>
                <strong>
                  <span aria-label='required'>*</span>
                </strong>
              </label>
              <input
                id='name'
                type='text'
                name='name'
                placeholder='Legal Name'
              />
            </p>
            <p>
              <label htmlFor='email'>
                <span>Email</span>{' '}
                <strong>
                  <span aria-label='required'>*</span>
                </strong>
              </label>
              <input id='email' name='email' type='email' placeholder='Email' />
            </p>
            <p>
              <label htmlFor='date-of-birth'>
                <span>Date of Birth</span>{' '}
                <strong>
                  <span aria-label='required'>*</span>
                </strong>
              </label>
              <input type='date' />
            </p>
            <p>
              <label htmlFor='social-security-number'>
                <span>Social Security Number</span>{' '}
                <strong>
                  <span aria-label='required'>*</span>
                </strong>
              </label>
              <input type='string' placeholder='111-11-111' />
            </p>
          </section>
          <section>
            <h2>Financial Information</h2>
            <p>
              <label htmlFor='credit'>
                <span>How much credit do you currently have available?</span>
                <strong>
                  <span aria-label='required'>*</span>
                </strong>
              </label>
              <select name='credit' id='credit'>
                <option value='low'>$0 - $5,000</option>
                <option value='med'>$5,001 - $10,000</option>
                <option value='high'>10,000+</option>
              </select>
            </p>
            <fieldset>
              <legend>Which assets do you currently have available?</legend>
              <p>
                <input type='checkbox' id='car' name='assets' value='car' />
                <label htmlFor='car'>Car</label>
              </p>
              <p>
                <input type='checkbox' id='house' name='assets' value='house' />
                <label htmlFor='house'>House</label>
              </p>
              <p>
                <input type='checkbox' id='boat' name='assets' value='boat' />
                <label htmlFor='boat'>Boat</label>
              </p>
              <p>
                <input
                  type='checkbox'
                  id='retirement-account'
                  name='assets'
                  value='retirement-account'
                />
                <label htmlFor='retirement-account'>Retirement Account</label>
              </p>
            </fieldset>
          </section>
          <p>
            <label htmlFor='additional-comments'>Additional Comments</label>
            <textarea
              name='additional-comments'
              id='additional-comments'
              cols={30}
              rows={10}
            ></textarea>
          </p>
          <p>
            <input type='checkbox' name='doesConsent' id='doesConsent' />
            <label htmlFor='doesConsent'>
              <span>I consent to storing my personal information</span>{' '}
              <strong>
                <span aria-label='required'>*</span>
              </strong>
            </label>
          </p>
        </form>
      </div>
    </div>
  );
}
