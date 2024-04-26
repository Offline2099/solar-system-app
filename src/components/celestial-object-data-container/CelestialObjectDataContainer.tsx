import './CelestialObjectDataContainer.scss';
import { CelestialObjectTypes, CelestialObject, Planet, Star } from "../../types/data";
import { fillStarDataTemplate } from "../../data/template-star";
import { fillPlanetDataTemplate } from "../../data/template-planet";
import { CelestialObjectDataSection } from '../../types/ui';
import DataValueContainer from '../data-value-container/DataValueContainer';

const CelestialObjectData = (item: CelestialObject) => {

  const objectData = (): CelestialObjectDataSection[] => {
    if (item.type == CelestialObjectTypes.star) return fillStarDataTemplate(item.body as Star);
    if (item.type == CelestialObjectTypes.planet) return fillPlanetDataTemplate(item.body as Planet);
    return [];
  } 

  return (
    <div className={`data-container ${item.type}`}>
      {objectData().map((section, sectionIndex) => 
        <div key={sectionIndex} className='data-section'>
          <div className='data-section-header'>{section.name}</div>
          <div className='data-section-body'>
            {section.groups.map((group, groupIndex) => 
              <div key={groupIndex} className='data-section-group'>
                {group.name !== '' && 
                  <div className='data-section-group-name'>{group.name}</div>
                }
                <div className='data-section-group-body'>
                  {group.rows.map((row, rowIndex) => 
                    <div key={rowIndex} className='data-section-row'>
                      <div className='data-prop-name'>{row.name}</div>
                      <DataValueContainer {...row.value} />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>    
        </div>
      )}
    </div>
  );
}

export default CelestialObjectData;