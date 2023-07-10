
const scrollDownTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    });
};

export default scrollDownTo;