# Bulding a new UI

In lerningn react, I was sent to the react js site, I followed the getting started, and also ran the create-react-app. While I was able to runthroug all of these, there were still a few unaswered questions.

## Start with the minimum

Lets start with the simplest html Hello World:

```html
<html>
<head></head>
<body>
Hello World
</body>
</html>
```

How do we get the hello world example from the component tutorial to run.

```js

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello, world
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('hello-example')
);

```

# A basic setup 

explain the basic docker files - this could be external, but we have an nginx. Later, we may need to play with the configuration.

# First step 

Following : https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute

This works great.

# Adding JSX

Following : https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project

This also works well, but it is not recomended for production. Lets stay withthis for a little longer.

# Componenet reuse

In our componenets we have the following : 

```js
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
```

For which seeems to lock us to the div. 

The following changes will allow for some code reuse. 

See GIST : https://gist.github.com/gaearon/faa67b76a6c47adbab04f739cba7ceda

In this case, the DOM renderer will get all DOM objects - but based on an userdefined ID, you can dig down deeper to identify it. 

The question is how to translate this down further.