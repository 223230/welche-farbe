import React from 'react';
import { CustomPicker } from 'react-color';

import Hue from 'react-color/lib/components/common';

class ColorPicker extends React.Component {
  render() {
    return (
        <div>
            <Hue
            {...this.props}
            pointer={ CustomPointer }
            onChange={ this.handleChange }
            direction={ 'horizontal' || 'vertical' } />
        </div>
    );
  }
}

export default CustomPicker(ColorPicker);
