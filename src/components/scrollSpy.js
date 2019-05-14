//inspired by https://medium.com/front-end-weekly/anatomy-of-a-scrollspy-component-with-react-and-typescript-1-2-c04f9d5c9bad

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Button, withStyles } from "@material-ui/core";

const styles = theme => ({
  navigation: {
    marginLeft: "auto"
  },
  button: {
    color: "currentColor",
    fontSize: 12,
    [theme.breakpoints.down("sm")]: {
      fontSize: 10
    }
  },
  active: {
    backgroundImage: `linear-gradient(-135deg, #ffffff40, ${
      theme.palette.secondary.main
    })`,
    color: "white",
    boxShadow: `0 10px 15px -2px ${theme.palette.tint}60,${theme.shadows[10]}`
  }
});

const ScrollSpy = ({ classes, menuItems, offset }) => {
  const items = menuItems.map(item => {
    item.inView = false;
    item.el = document.getElementById(item.id);
    return item;
  });

  const [elements, setElements] = useState(items);

  const scrollTo = item => {
    let element = item.el === null ? document.getElementById(item.id) : item.el;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  };

  function isInView(element) {
    if (!element) return false;
    //find out the current position of the element’s bounding rectangle
    const rect = element.getBoundingClientRect();
    //compare its top and bottom to the innerHeight of the window
    const visible =
      (rect.top >= 0 + offset && rect.top <= window.innerHeight - offset) ||
      (rect.top < 0 + offset && rect.bottom > window.innerHeight - offset);
    return visible;
  }
  const spy = () => {
    const newElements = elements.map(item => {
      return {
        id: item.id,
        text: item.text,
        el: item.el || document.getElementById(item.id),
        inView: isInView(item.el)
      };
    });
    //if there are several elements in view, return the first
    const firstActiveItem = newElements.find(item => !!(item && item.inView));
    if (!firstActiveItem) {
      setElements(newElements);
    } else {
      const updElements = newElements.map(item => ({
        ...item,
        inView: item === firstActiveItem
      }));
      setElements(updElements);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", spy);
    return () => window.removeEventListener("scroll", spy);
  });

  return (
    <nav className={classes.navigation}>
      {elements.map(item => (
        <Button
          key={item.text}
          className={classNames(
            classes.button,
            item.inView ? classes.active : null
          )}
          onClick={() => scrollTo(item)}
        >
          {item.text}
        </Button>
      ))}
    </nav>
  );
};
ScrollSpy.propTypes = {
  menuItems: PropTypes.array.isRequired,
  offset: PropTypes.number
};

export default withStyles(styles)(ScrollSpy);
