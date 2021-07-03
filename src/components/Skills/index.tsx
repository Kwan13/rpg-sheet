import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FaSave } from 'react-icons/fa';

import { useSkills } from '../../hooks/useSkills';

import { SkillItem } from '../SkillItem';
import { Input } from '../Input';

import { Container, GridContent } from './styles';

type FormData = {
  accounting: number;
  anotherLanguage: number;
  anthropology: number;
  archeology: number;
  art: number;
  astronomy: number;
  bargain: number;
  biology: number;
  charm: number;
  chemical: number;
  climb: number;
  computing: number;
  counterattack: number;
  cover: number;
  craft: number;
  credit: number;
  defend: number;
  disguise: number;
  dodge: number;
  drive: number;
  drugstore: number;
  electricalRepair: number;
  electronics: number;
  energy: number;
  firstAid: number;
  geology: number;
  heavyMachine: number;
  hide: number;
  jump: number;
  lipService: number;
  listen: number;
  locate: number;
  locksmith: number;
  martialArts: number;
  mechanicalRepair: number;
  medicine: number;
  nativeLanguage: number;
  naturalHistory: number;
  navigate: number;
  occultism: number;
  persuade: number;
  photography: number;
  physical: number;
  pilot: number;
  pitch: number;
  prestidigitation: number;
  psychoanalysis: number;
  psychology: number;
  regeneration: number;
  resist: number;
  ride: number;
  right: number;
  stealth: number;
  story: number;
  swim: number;
  trackBack: number;
  trick: number;
};

export function Skills(): ReactElement {
  const { handleSubmit, register } = useForm();
  const { setSkills, skills } = useSkills();

  function onSubmit(data: FormData) {
    setSkills(data);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <header>
          <h3>Perícias</h3>
          <button type="submit">
            <FaSave size={20} color="#797D9A" />
          </button>
        </header>

        <GridContent>
          <SkillItem name="Força">
            <div>
              <h4>ARREMESO:</h4>
              <Input
                type="number"
                {...register('pitch')}
                defaultValue={skills.pitch}
              />
            </div>
            <div>
              <h4>ARTES MARCIAIS:</h4>
              <Input
                type="number"
                {...register('martialArts')}
                defaultValue={skills.martialArts}
              />
            </div>
            <div>
              <h4>CAVALGAR:</h4>
              <Input
                type="number"
                {...register('ride')}
                defaultValue={skills.ride}
              />
            </div>
            <div>
              <h4>ESCALAR:</h4>
              <Input
                type="number"
                {...register('climb')}
                defaultValue={skills.climb}
              />
            </div>
            <div>
              <h4>NADAR:</h4>
              <Input
                type="number"
                {...register('swim')}
                defaultValue={skills.swim}
              />
            </div>
            <div>
              <h4>PULO:</h4>
              <Input
                type="number"
                {...register('jump')}
                defaultValue={skills.jump}
              />
            </div>
          </SkillItem>
          <SkillItem name="Constituição">
            <div>
              <h4>ESCUTAR:</h4>
              <Input
                type="number"
                {...register('listen')}
                defaultValue={skills.listen}
              />
            </div>
            <div>
              <h4>OP. MAQ. Pesada:</h4>
              <Input
                type="number"
                {...register('heavyMachine')}
                defaultValue={skills.heavyMachine}
              />
            </div>
            <div>
              <h4>RESISTIR:</h4>
              <Input
                type="number"
                {...register('resist')}
                defaultValue={skills.resist}
              />
            </div>
            <div>
              <h4>DEFENDER:</h4>
              <Input
                type="number"
                {...register('defend')}
                defaultValue={skills.defend}
              />
            </div>
            <div>
              <h4>ENERGIA:</h4>
              <Input
                type="number"
                {...register('energy')}
                defaultValue={skills.energy}
              />
            </div>
            <div>
              <h4>REGENERAÇÃO:</h4>
              <Input
                type="number"
                {...register('regeneration')}
                defaultValue={skills.regeneration}
              />
            </div>
          </SkillItem>
          <SkillItem name="Sabedoria">
            <div>
              <h4>ARTE:</h4>
              <Input
                type="number"
                {...register('art')}
                defaultValue={skills.art}
              />
            </div>
            <div>
              <h4>CHAVEIRO:</h4>
              <Input
                type="number"
                {...register('locksmith')}
                defaultValue={skills.locksmith}
              />
            </div>
            <div>
              <h4>FOTOGRAFIA:</h4>
              <Input
                type="number"
                {...register('photography')}
                defaultValue={skills.photography}
              />
            </div>
            <div>
              <h4>HISTÓRIA:</h4>
              <Input
                type="number"
                {...register('story')}
                defaultValue={skills.story}
              />
            </div>
            <div>
              <h4>HISTÓRIA NATURAL:</h4>
              <Input
                type="number"
                {...register('naturalHistory')}
                defaultValue={skills.naturalHistory}
              />
            </div>
            <div>
              <h4>LÍNGUA NATIVA:</h4>
              <Input
                type="number"
                {...register('nativeLanguage')}
                defaultValue={skills.nativeLanguage}
              />
            </div>
            <div>
              <h4>LOCALIZAR:</h4>
              <Input
                type="number"
                {...register('locate')}
                defaultValue={skills.locate}
              />
            </div>
            <div>
              <h4>OCULTISMO:</h4>
              <Input
                type="number"
                {...register('occultism')}
                defaultValue={skills.occultism}
              />
            </div>
            <div>
              <h4>OFÍCIO:</h4>
              <Input
                type="number"
                {...register('craft')}
                defaultValue={skills.craft}
              />
            </div>
          </SkillItem>
          <SkillItem name="Destreza">
            <div>
              <h4>ESQUIVAR:</h4>
              <Input
                type="number"
                {...register('dodge')}
                defaultValue={skills.dodge}
              />
            </div>
            <div>
              <h4>FURTIVIDADE:</h4>
              <Input
                type="number"
                {...register('stealth')}
                defaultValue={skills.stealth}
              />
            </div>
            <div>
              <h4>ESCORDER-SE:</h4>
              <Input
                type="number"
                {...register('hide')}
                defaultValue={skills.hide}
              />
            </div>
            <div>
              <h4>DIRIGIR:</h4>
              <Input
                type="number"
                {...register('drive')}
                defaultValue={skills.drive}
              />
            </div>
            <div>
              <h4>PILOTAR:</h4>
              <Input
                type="number"
                {...register('pilot')}
                defaultValue={skills.pilot}
              />
            </div>
            <div>
              <h4>CONTRA-ATAQUE:</h4>
              <Input
                type="number"
                {...register('counterattack')}
                defaultValue={skills.counterattack}
              />
            </div>
            <div>
              <h4>PRESTIDIGITAÇÃO:</h4>
              <Input
                type="number"
                {...register('prestidigitation')}
                defaultValue={skills.prestidigitation}
              />
            </div>
          </SkillItem>
          <SkillItem name="Inteligência">
            <div>
              <h4>ANTROPOLOGIA:</h4>
              <Input
                type="number"
                {...register('anthropology')}
                defaultValue={skills.anthropology}
              />
            </div>
            <div>
              <h4>ARQUEOLOGIA:</h4>
              <Input
                type="number"
                {...register('archeology')}
                defaultValue={skills.archeology}
              />
            </div>
            <div>
              <h4>ASTRONOMIA:</h4>
              <Input
                type="number"
                {...register('astronomy')}
                defaultValue={skills.astronomy}
              />
            </div>
            <div>
              <h4>BIOLOGIA:</h4>
              <Input
                type="number"
                {...register('biology')}
                defaultValue={skills.biology}
              />
            </div>
            <div>
              <h4>COMPUTAÇÃO:</h4>
              <Input
                type="number"
                {...register('computing')}
                defaultValue={skills.computing}
              />
            </div>
            <div>
              <h4>CONTABILIDADE:</h4>
              <Input
                type="number"
                {...register('accounting')}
                defaultValue={skills.accounting}
              />
            </div>
            <div>
              <h4>CRÉDITO:</h4>
              <Input
                type="number"
                {...register('credit')}
                defaultValue={skills.credit}
              />
            </div>
            <div>
              <h4>DIREITO:</h4>
              <Input
                type="number"
                {...register('right')}
                defaultValue={skills.right}
              />
            </div>
            <div>
              <h4>ELETRÔNICA:</h4>
              <Input
                type="number"
                {...register('electronics')}
                defaultValue={skills.electronics}
              />
            </div>
            <div>
              <h4>FARMÁCIA:</h4>
              <Input
                type="number"
                {...register('drugstore')}
                defaultValue={skills.drugstore}
              />
            </div>
            <div>
              <h4>FÍSICA:</h4>
              <Input
                type="number"
                {...register('physical')}
                defaultValue={skills.physical}
              />
            </div>
            <div>
              <h4>GEOLOGIA:</h4>
              <Input
                type="number"
                {...register('geology')}
                defaultValue={skills.geology}
              />
            </div>
            <div>
              <h4>MEDICINA:</h4>
              <Input
                type="number"
                {...register('medicine')}
                defaultValue={skills.medicine}
              />
            </div>
            <div>
              <h4>NAVEGAR:</h4>
              <Input
                type="number"
                {...register('navigate')}
                defaultValue={skills.navigate}
              />
            </div>
            <div>
              <h4>OUTRA LINGUA:</h4>
              <Input
                type="number"
                {...register('anotherLanguage')}
                defaultValue={skills.anotherLanguage}
              />
            </div>
            <div>
              <h4>PRIMEIROS SOCORROS:</h4>
              <Input
                type="number"
                {...register('firstAid')}
                defaultValue={skills.firstAid}
              />
            </div>
            <div>
              <h4>PSICANÁLISE:</h4>
              <Input
                type="number"
                {...register('psychoanalysis')}
                defaultValue={skills.psychoanalysis}
              />
            </div>
            <div>
              <h4>PSICOLOGIA:</h4>
              <Input
                type="number"
                {...register('psychology')}
                defaultValue={skills.psychology}
              />
            </div>
            <div>
              <h4>QUÍMICA:</h4>
              <Input
                type="number"
                {...register('chemical')}
                defaultValue={skills.chemical}
              />
            </div>
            <div>
              <h4>RASTREAR:</h4>
              <Input
                type="number"
                {...register('trackBack')}
                defaultValue={skills.trackBack}
              />
            </div>
            <div>
              <h4>REPARO ELÉTRICO:</h4>
              <Input
                type="number"
                {...register('electricalRepair')}
                defaultValue={skills.electricalRepair}
              />
            </div>
            <div>
              <h4>REPARO MECÂNICO:</h4>
              <Input
                type="number"
                {...register('mechanicalRepair')}
                defaultValue={skills.mechanicalRepair}
              />
            </div>
          </SkillItem>
          <SkillItem name="Carisma">
            <div>
              <h4>BARGANHA:</h4>
              <Input
                type="number"
                {...register('bargain')}
                defaultValue={skills.bargain}
              />
            </div>
            <div>
              <h4>DISFARCE:</h4>
              <Input
                type="number"
                {...register('disguise')}
                defaultValue={skills.disguise}
              />
            </div>
            <div>
              <h4>LÁBIA:</h4>
              <Input
                type="number"
                {...register('lipService')}
                defaultValue={skills.lipService}
              />
            </div>
            <div>
              <h4>OCULTAR:</h4>
              <Input
                type="number"
                {...register('cover')}
                defaultValue={skills.cover}
              />
            </div>
            <div>
              <h4>PERSUADIR:</h4>
              <Input
                type="number"
                {...register('persuade')}
                defaultValue={skills.persuade}
              />
            </div>
            <div>
              <h4>CHARME:</h4>
              <Input
                type="number"
                {...register('charm')}
                defaultValue={skills.charm}
              />
            </div>
            <div>
              <h4>ENGANAR:</h4>
              <Input
                type="number"
                {...register('trick')}
                defaultValue={skills.trick}
              />
            </div>
          </SkillItem>
        </GridContent>
      </form>
    </Container>
  );
}
