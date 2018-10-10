const React = require("react");
const styles = require("./styles.scss");
const ReactResizeDetector = require("react-resize-detector").default;

const ChooserButton = require("../ChooserButton");
const ChooserButtonGroup = require("../ChooserButtonGroup");
const ChooserDropdown = require("../ChooserDropdown");

const TABLET_PORTRAIT_OR_UP = 600;

class AgeChooser extends React.Component {
  state = {
    isMobile: false
  };
  onResize = () => {
    console.log("resizing...");
  };
  render() {
    // Function passed down from main App
    const { setGeneration } = this.props;

    return (
      <div className={styles.wrapper}>
        {/* 
          This is just a label for the user
          Maybe think about resizing this on mobile
        */}
        <div className={styles.question}>
          What age-group are you interested in?
        </div>

        
        <ReactResizeDetector handleWidth onResize={this.onResize}>
          {(width, height) => (
            <div>
              {/*
                Dropdown box generation selector for
                mobile devices that can't display all
                the buttons.
              */}
              {width < TABLET_PORTRAIT_OR_UP && (
                <ChooserDropdown
                  currentGeneration={this.props.currentGeneration}
                  setGeneration={setGeneration}
                />
              )}

              {/* 
                If the device isn't mobile
                then show the buttons.
              */}
              {width > TABLET_PORTRAIT_OR_UP && (
                <ChooserButtonGroup
                  setGeneration={setGeneration}
                  currentGeneration={this.props.currentGeneration}
                />
              )}
            </div>
          )}
        </ReactResizeDetector>
      </div>
    );
  }
}

module.exports = AgeChooser;