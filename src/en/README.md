<CHeader
  title="Accessible Internet"
  subtitle="Accessibility Guide for Web Developers"
  contributeMessage="Contribute with this project"
/>

Hello! Have you ever stopped to think about how a visually impaired person can access web content on your website? Or how can a hearing impaired understand a video on YouTube? There are a lot of people working so that people with disabilities (and not a few) can access the internet so that the content can be accessible to them. But if you have done a little research on the topic, you know that it is very diffuse on the web, and a little complicated to understand, not to mention the extensive W3C documentation. This guide is intended for anyone who wants to understand how to make network content accessible. And I just ask you a favor: share this information and contribute, increasing the content or sharing it, so that it can grow more and more.

The objective of this project is work on two lines:

1. The initiative of the website in question, which is intended to be a guide for developers; and
2. The initiative of the [Github forum](https://github.com/acessibilidade-for-devs/forum). If you have any questions, share with us. And be sure to access and help other people there too.

::: tip Tim Berners-Lee
The power of the web is in its universality. Being accessed by everyone, regardless of disability, is an essential aspect
:::

## What you will see

[[toc]]

## What is web accessibility?

Accessibility is the ability to make content accessible to different devices or different users. This is where an interesting question comes in: making the web accessible will not only benefit the disabled. Following are some examples of some scenarios that accessibility on the site helps.

* Slow Internet;
* Use a device, such as a smartphone, with one hand;
* Temporary disability, such as eye surgery; among others...

Therefore, making the internet accessible is not only for the visually or hearing impaired. It is a necessity. **There is different users in different situations and making the content available so that everyone can access it is a contribution for the internet to become universal**. There are more examples of situations where an application being accessible is important in [introduction to W3C Accessibility](http://www.w3c.br/pub/Materiais/PublicacoesW3C/cartilha-w3cbr-acessibilidade-web-fasciculo-I.html#capitulo3)

## Why should a website be accessible?

Okay, you showed me what accessibility is. But why do I need to stick to that? How do I convince my boss?

First, there are **statistics**. According to the IBGE (Brazilian Institute of Geography and Statistics) census, in 2010, there are 45,606,048 Brazilians, 23.9% of the total population, with some type of disability. If we go to a global scope, there are more than 650 million people with some type of disability. Therefore, content that is not accessible prevents a large portion of the population from accessing it.

Finally, it is law. According to [law 13.146 de 2015](http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13146.htm), for any company website based in Brazil and government websites, it is mandatory to have good accessibility practices.

## What technologies for accessibility?

* **Screen reader** allows visually impaired users to “hear” web content on the device’s screen;
* **Textual Browser** this type of browser values ​​loading text only, not loading images and illustrative content. Used by the visually impaired or slow connection;
* **Braille display** this output device prints braille texts for the visually impaired. From electronic and mechanical circuits, it prints the letters on a tactile device in the Braille system;
* **Voice Browser** allows navigation through voice commands. Used by people with a motor disability;
* **Screen magnifier** are softwares that enlarge the texts on the screen for people with difficulty to see;

## Good practices in website development

The following are numerous good practices for developing inclusive websites:

### Specify the language of your website

Use the HTML 5 `lang` attribute on the page, preferably in the html element. If, in any part of the site, there is a text in a language other than the main language, also specify the language for reading that text.

### Use HTML 5 semantics

Some screen readers read a paragraph as follows: "paragraph: [text you have entered]". That is, they were programmed to understand HTML semantics, so don't neglect it!

### Place anchors at the top of the page for important parts of your website

Imagine a screen reader having to read each menu and submenu of the page on a news site that the user entered for a specific news story? For this reason, it is important to place, at the top, a link to the most important part of the site, which in the case of a news portal is the main news.

### Place an accessibility bar at the top of the site

Items that need to be there: high contrast (put the black background with white letters) and feature to increase or decrease the font. This feature is very common to find on government websites.

### High contrast feature

Black background, usually yellow links, white lines, and white letters. This feature is very useful in high light scenarios.

### Enable keyboard navigation

Offer keyboard navigation, using shortcut keys, for example. Some screen readers already come with some important shortcut keys, such as 'Go to main content', 'View links' and more.

### Check your site's textual contrast

There are interesting tools, one of which is the [Check My Colours](http://www.checkmycolours.com/). Contrast is key to **readability**.

### Place sign language (sign language) on the website

According to [Law 10.436/2002](http://www.planalto.gov.br/ccivil_03/leis/2002/L10436.htm), libras is the second official language in Brazil and for many deaf people it is the only language.

### Don't depend on colors!

Make sure that the information of a particular element, such as a link, does not depend on colors. For example, a button that is green indicating a positive action, may not be interpreted correctly by a colorblind.

---


The following are some W3C recommendations for developing accessible websites

## WCAG - Accessibility Recommendations for Web Content

The [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) is a set of W3C recommendations for making web content accessible. It aims to provide coding techniques to make the content accessible. Its first version, from 1999, already provided for numerous techniques. Currently, in 2019, we are in the WCAG 2.1 version. It is divided into:

* **Principles** are the foundation for web accessibility;
* **Guidelines** sthe 12 basic objectives on the principles;
* **Success criteria** for each guideline there are criteria to comply with them, ranging from A (lowest) to AAA (highest);
* **Sufficient type techniques and sufficient advice** are the ones that already comply with the guidelines, but the recommended ones are those that go beyond countless accessibility barriers;

---

Below is a summary of each principle with the main and technical guidelines for complying with them.

### Perceptible: the user must be able to perceive the content. This cannot be invisible to some senses

#### Guideline 1.1 - A text alternative is required

Tip 1: use the alt attribute on the images.
```html
<img src="logo.jpg" alt="This is the company logo">
```

Tip 2: Place the links to a page explaining the diagrams on the page, for example, if that diagram came from an IBGE survey, or a text next to the diagram explaining it.

Tip 3: if you have a form, just index the inputs to the respective labels, or put a title on the inputs if they DO NOT HAVE LABEL, or for img type inputs, put an alt.

```html
<label for="email"> Your mail here <label>

<input type="text" title="Code area">

<input type="img" alt="Send form">
```

Tip 4: the non-textual element that should be ignored by assistive technologies, just insert it via CSS. The example below is with an image as a background

```css
div {
  background: ulr(‘image/my_image.jpg’) no-repeat;
}
```

#### Guideline 1.2 - audio and video content

Tip 1: Offer alternative text, such as a transcript of the video or audio, next to the media. An example of this is the lecture website [TED](https://www.ted.com/#/).

Tip 2: as already exposed here, offer a possibility to put sign language.

#### Guideline 1.3 – adaptable

Tip 1: use HTML semantics a lot.

Tip 2: as I said here and I repeat: do not make the content depend on its shape, color or any characteristic that depends on vision or hearing.
