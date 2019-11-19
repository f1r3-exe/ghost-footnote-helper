# Ghost Footnote Helper
This script allows you to use footnotes within your Ghost Blog. You don't need to write the whole blog post in markdown. Just include the script in your Theme (preferred) or via code injection.

>Hint: Does not work in some older browsers caused by the childNodes.forEach() method

## Usage

1. **Include the script in your theme**
	This example utilizes a Ghost handlebars helper to ensure the script is loaded only on posts with the private
	tag "#fn-helper" activated. The code below must be implemented **between** `{{#post}}` and `{{/post}}`.
	If you use the [casper-theme](https://github.com/TryGhost/Casper) take a look at the `post.hbs` file.

	```hbs
	{{!-- Begin of all post-related content --}}
	{{#post}}
	
	{!-- Some HTML and handlebars helpers of your Ghost theme are here --}}

	{{!-- If private tag #fn-helper is set for a post, the fn-helper script will be loaded --}}
	{{#has tag="#fn-helper"}}
	<script type="text/javascript" src="yourDomain.tld/assets/built/hn-helper.js" defer></script>
	{{/has}}

	{{!-- End of all post-related content --}}
	{{/post}}
	```
	**Important:** Upload your theme *and* restart Ghost!
	&nbsp;
	
2. **Create footnotes in your text**
	The script is ready. Now write your text and create some footnotes like `[1]` .
	
	At the editor of a post: 
	Klick wherever you wanna place a footnote. Now type `^` followed by `[1]` followed by another `^`. You can change the character inside the `[]`. Obviously you should increment numbers. It's best practice.
	
	**Don't forget:** Footnotes like `[1]` must be a link with a specific target. Mark the 3 characters and set the link target to `#footnote-1`. Whatever is inside the square brackets should be the link fronted with `#footnotes-` . (This is an example. You can set you own links ;) )
&nbsp;

3. **Use some HTML for footnote section**
	In order to display footnotes at the bottom of a post, we have to implement some custom HTML. Create a HTML-card (inside the Ghost editor) *at the end of a post* with the following code:
	```hmtl
	<hr class="footnotes-sep">
	<section class="footnotes">
		<ol id="footnoteList" class="footnotes-list">
			<li id="footnote-1" class="footnote-item">
				<p>Footnotes are nice. Especially with <a href="https://ghost.org">Ghost</a> </p>
			</li>
			<li id="footnote-2" class="footnote-item">
				<p>Hmm. Really cool, isn't it? </p>
			</li>
			<li id="footnote-3" class="footnote-item">
				<p>Some other reference for your readers. </p>
			</li>
		</ol>
	</section>
	```
	As you can see this is an ordered list and each list item `<li>` represents a footnote.
	**Things you must change accordingly:**
	

	 - Update the `id=""` of ech list item. The value must be the link of the footnote you created inside your text (see 2.). Example: If you set the link of your `[1]` to `#footnote-1` update the id to `id="footnote-1"`
	 - Enter all content of the footnote between `<p>` and `</p>` . You can implement links with an a-tag as well. See embedded code above for example. Please include a space before the closing p-tag, like: `<p>This is my footnote. </p>` . The scipt will append an icon right behind the footnote text. Your readers can klick the icon and their browser will jump to the footnote inside your text. From there thy can jump back by klicking the footnote `[1]` .
&nbsp;

4. **Activate the footnote helper script**
	With Ghost you can create tags for your posts. In order to use the fn-helper you have to add the private tag `#fn-helper` to every post with footnotes.
	

	 - Create a private tag with the name `#fn-helper` inside your Ghost admin interface.
	 - Add this private tag to every post with footnotes / where ever you wanna use the fn-helper script (can be done easily within the Ghost admin interface)
	 - That's it. Keep in mind: The fn-helper manipulates some `id=""` fields of the footnotes elements. Therefore your readers can klick a footnote like [1] inside your text to jump to the explanation at the end of your post. And they can jump back by klicking the `↩︎` icon.
