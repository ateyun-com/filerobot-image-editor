/** External Dependencies */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Crop as CropIcon } from '@scaleflex/icons';

/** Internal Dependencies */
import { useStore } from 'hooks';
import ToolsBarItemButton from 'components/ToolsBar/ToolsBarItemButton';
import { TOOLS_IDS } from 'utils/constants';
import CropPresetsOption from './CropPresetsOption';

const Crop = ({ selectTool, isSelected, t }) => {
  const { config } = useStore();
  const [anchorEl, setAnchorEl] = useState();

  const selectToolAndShowPresets = (toolId, e) => {
    selectTool(toolId);
    setAnchorEl(e.currentTarget);
  };

  const closeCropPresets = () => {
    setAnchorEl(null);
  };

  return (
    <ToolsBarItemButton
      id={TOOLS_IDS.CROP}
      label={t('cropTool')}
      Icon={CropIcon}
      onClick={selectToolAndShowPresets}
      isSelected={isSelected}
    >
      {!config[TOOLS_IDS.CROP].noPresets && (
        <CropPresetsOption anchorEl={anchorEl} onClose={closeCropPresets} />
      )}
    </ToolsBarItemButton>
  );
};

Crop.defaultProps = {
  isSelected: false,
};

Crop.propTypes = {
  selectTool: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default Crop;