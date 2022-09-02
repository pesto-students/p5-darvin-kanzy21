
## Shreyas Kanzarkar
# What happens when we enter a URL in the Browser???

  

Before we answer this question we will need to know more about the browser itself, such what a browser consists of, what is its basic but main functionality, etc. We will answer it one by one.

  

### What is the main functionality of the browser?

  

The main functionality of a browser is to represent the resources we choose by requesting it from server. This resource can be html, video, pdf, image or anything which the server sends. The browser will just process this response and represent it to us with

  

To achieve this, browser has some high level components which are:

  

1. The user interface: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

  

2. The browser engine: communicates actions between the UI and the rendering engine.

  

3. The rendering engine: responsible for displaying requested content.

  

4. Networking: For network calls such as HTTP requests.

  

5. JavaScript interpreter. Used to parse and execute JavaScript code.

  

6. Data storage: The browser may need to save all sorts of data locally, such as cookies, etc.

  

### Now coming to the step by step flow of what happens when we enterl the url in the browser.

  

When you point your browser at a URL like https://code.io/hello-world, your browser has to figure out which server on the Internet is hosting the site. It does this by looking up the domain, code.io, to find the address.

  

So in that terms:

1. Browser looks up IP address for the domain

2. Browser initiates TCP connection with the server

3. Browser sends the HTTP request to the server

4. Server processes request and sends back a response

5. After that, this is the basic flow of the rendering engine

  

- 5.1 The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree" or "DOM tree".

  

- 5.2 The rendering engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

  

- Note: This is an async process.

  

- 5.3 The render tree will be traversed and each node will be painted using the UI backend layer.

  

- 5.4 The HTML parser and CSS parser will provide a parse tree.

  

- 5.5 The output tree (the "parse tree") is a tree of DOM element and attribute nodes. DOM is short for Document Object Model. It is the object presentation of the HTML document and the interface of HTML elements to the outside world like JavaScript.

  

- 5.6 Render tree construction: While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.

  

- 5.7 Layout: When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow.

  

- 5.8 Painting: In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure component.

  

6. The order of processing scripts: The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed.

  

This can be better expalined by a diagram:

![image](https://svgshare.com/i/kCY.svg)