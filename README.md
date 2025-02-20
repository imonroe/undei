# unDEI
## Un-DEI your web site automatically with this handy JS package.

Why take down a whole website filled with valuable information, just because the current oligarchs who have taken over the government have decided that some of the language is **Very Bad** and **Must Not Be Used EVER?**

Never fear!  With this handy Javascript package, you can quickly update your whole website to censor the words that hurt the feelings of Co-Presidents Trump and Musk!

There is a configurable hover state which will reveal the words which have been censored, but let's face it, you're blacking them out for a reason.  You ARE blacking them out for a REAL REASON, right?

![image](https://github.com/user-attachments/assets/edcd750a-1a32-45cc-af0a-9deb6be08460)


## Try it out!
- `git clone` this repo to a handy location.
- `python3 -m http.server 8000` to run a local webserver. I guess `npm install -g http-server && http-server -p 8000` would work too.
- visit `http://localhost:8000/test.html`

## Installation

`npm install undei`

## Usage

### Vanilla JS

```
<script type="module">
    import { hideForbiddenWords } from "./index.js";
    document.addEventListener("DOMContentLoaded", () => hideForbiddenWords(true));
</script>

// If you want to disable the hover effect, use hideForbiddenWords(false) instead.

```

### NextJS

Create a component, for instance something like `components/HideForbiddenWords.js`

```
import { useEffect } from 'react';

const HideForbiddenWords = ({ enableHover = true }) => {
  useEffect(() => {
    const loadScript = async () => {
      // Dynamically import the module to avoid SSR issues
      const { hideForbiddenWords } = await import('hide-forbidden-words');
      hideForbiddenWords(enableHover);
    };

    loadScript();
  }, [enableHover]);

  return null; // No UI, just runs the script
};

export default HideForbiddenWords;
```

Then, in your page do something like:
```
import Head from 'next/head';
import HideForbiddenWords from '../components/HideForbiddenWords';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Test Page for Un-DEI</title>
      </Head>

      <main className="container">
        <h1>The Importance of Diversity, Equity, and Inclusion</h1>
        <p>Diversity, equity, and inclusion (DEI) are fundamental principles that shape a just and harmonious society.</p>
        <p>They foster innovation, ensure fairness, and create opportunities for all individuals, regardless of their background.</p>
      </main>

      <HideForbiddenWords enableHover={true} />
    </div>
  );
}

// To disable the hover effect, use <HideForbiddenWords enableHover={false} /> instead.
```

#### How can I change the words that are censored?

Great question!  Now that the oligarchs have decided to make certain words verboten, you may need to add additional verbage in the future to account for their new opinions on what kinds of words are inappropriate or unfashionable.

All you need to do is go into the `index.js` file and update the `forbiddenWords` array.  I suppose this should be configurable at runtime; maybe I'll put that in the next version.

#### Ok, this is hilarious, and I want to give you money.

While I do love money, what I'd love more is for you to take the money you'd like to give me, and instead give it to one of these charities who are doing the hard work of resisting, which has never been more important than now:
- ACLU: [https://action.aclu.org/give/now](https://action.aclu.org/give/now)
- National Urban League: [https://nul.org/donate](https://nul.org/donate)
- National Immigration Law Center [https://donate.nilc.org/page/72877/donate/1](https://donate.nilc.org/page/72877/donate/1)
