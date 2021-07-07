import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FaSave } from 'react-icons/fa';

import { useSkills } from '../../hooks/useSkills';

import { SkillItem } from './SkillItem';
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
  const { skills, handleSetSkills } = useSkills();

  function onSubmit(data: FormData) {
    const skillsData = {
      strength: {
        pitch: data.pitch,
        martialArts: data.martialArts,
        ride: data.ride,
        climb: data.climb,
        swim: data.swim,
        jump: data.jump,
      },
      constitution: {
        listen: data.listen,
        heavyMachine: data.heavyMachine,
        resist: data.resist,
        defend: data.defend,
        energy: data.energy,
        regeneration: data.regeneration,
      },
      wisdom: {
        art: data.art,
        locksmith: data.locksmith,
        photography: data.photography,
        story: data.story,
        naturalHistory: data.naturalHistory,
        nativeLanguage: data.nativeLanguage,
        locate: data.locate,
        occultism: data.occultism,
        craft: data.craft,
      },
      dexterity: {
        dodge: data.dodge,
        stealth: data.stealth,
        hide: data.hide,
        drive: data.drive,
        pilot: data.pilot,
        counterattack: data.counterattack,
        prestidigitation: data.prestidigitation,
      },
      intelligence: {
        anthropology: data.anthropology,
        archeology: data.archeology,
        astronomy: data.astronomy,
        biology: data.biology,
        computing: data.computing,
        accounting: data.accounting,
        credit: data.credit,
        right: data.right,
        electronics: data.electronics,
        drugstore: data.drugstore,
        physical: data.physical,
        geology: data.geology,
        medicine: data.medicine,
        navigate: data.navigate,
        anotherLanguage: data.anotherLanguage,
        firstAid: data.firstAid,
        psychoanalysis: data.psychoanalysis,
        psychology: data.psychology,
        chemical: data.chemical,
        trackBack: data.trackBack,
        electricalRepair: data.electricalRepair,
        mechanicalRepair: data.mechanicalRepair,
      },
      charisma: {
        bargain: data.bargain,
        disguise: data.disguise,
        lipService: data.lipService,
        cover: data.cover,
        persuade: data.persuade,
        charm: data.charm,
        trick: data.trick,
      },
    };

    handleSetSkills(skillsData);
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
                defaultValue={skills.strength.pitch}
              />
            </div>
            <div>
              <h4>ARTES MARCIAIS:</h4>
              <Input
                type="number"
                {...register('martialArts')}
                defaultValue={skills.strength.martialArts}
              />
            </div>
            <div>
              <h4>CAVALGAR:</h4>
              <Input
                type="number"
                {...register('ride')}
                defaultValue={skills.strength.ride}
              />
            </div>
            <div>
              <h4>ESCALAR:</h4>
              <Input
                type="number"
                {...register('climb')}
                defaultValue={skills.strength.climb}
              />
            </div>
            <div>
              <h4>NADAR:</h4>
              <Input
                type="number"
                {...register('swim')}
                defaultValue={skills.strength.swim}
              />
            </div>
            <div>
              <h4>PULO:</h4>
              <Input
                type="number"
                {...register('jump')}
                defaultValue={skills.strength.jump}
              />
            </div>
          </SkillItem>
          <SkillItem name="Constituição">
            <div>
              <h4>ESCUTAR:</h4>
              <Input
                type="number"
                {...register('listen')}
                defaultValue={skills.constitution.listen}
              />
            </div>
            <div>
              <h4>OP. MAQ. Pesada:</h4>
              <Input
                type="number"
                {...register('heavyMachine')}
                defaultValue={skills.constitution.heavyMachine}
              />
            </div>
            <div>
              <h4>RESISTIR:</h4>
              <Input
                type="number"
                {...register('resist')}
                defaultValue={skills.constitution.resist}
              />
            </div>
            <div>
              <h4>DEFENDER:</h4>
              <Input
                type="number"
                {...register('defend')}
                defaultValue={skills.constitution.defend}
              />
            </div>
            <div>
              <h4>ENERGIA:</h4>
              <Input
                type="number"
                {...register('energy')}
                defaultValue={skills.constitution.energy}
              />
            </div>
            <div>
              <h4>REGENERAÇÃO:</h4>
              <Input
                type="number"
                {...register('regeneration')}
                defaultValue={skills.constitution.regeneration}
              />
            </div>
          </SkillItem>
          <SkillItem name="Sabedoria">
            <div>
              <h4>ARTE:</h4>
              <Input
                type="number"
                {...register('art')}
                defaultValue={skills.wisdom.art}
              />
            </div>
            <div>
              <h4>CHAVEIRO:</h4>
              <Input
                type="number"
                {...register('locksmith')}
                defaultValue={skills.wisdom.locksmith}
              />
            </div>
            <div>
              <h4>FOTOGRAFIA:</h4>
              <Input
                type="number"
                {...register('photography')}
                defaultValue={skills.wisdom.photography}
              />
            </div>
            <div>
              <h4>HISTÓRIA:</h4>
              <Input
                type="number"
                {...register('story')}
                defaultValue={skills.wisdom.story}
              />
            </div>
            <div>
              <h4>HISTÓRIA NATURAL:</h4>
              <Input
                type="number"
                {...register('naturalHistory')}
                defaultValue={skills.wisdom.naturalHistory}
              />
            </div>
            <div>
              <h4>LÍNGUA NATIVA:</h4>
              <Input
                type="number"
                {...register('nativeLanguage')}
                defaultValue={skills.wisdom.nativeLanguage}
              />
            </div>
            <div>
              <h4>LOCALIZAR:</h4>
              <Input
                type="number"
                {...register('locate')}
                defaultValue={skills.wisdom.locate}
              />
            </div>
            <div>
              <h4>OCULTISMO:</h4>
              <Input
                type="number"
                {...register('occultism')}
                defaultValue={skills.wisdom.occultism}
              />
            </div>
            <div>
              <h4>OFÍCIO:</h4>
              <Input
                type="number"
                {...register('craft')}
                defaultValue={skills.wisdom.craft}
              />
            </div>
          </SkillItem>
          <SkillItem name="Destreza">
            <div>
              <h4>ESQUIVAR:</h4>
              <Input
                type="number"
                {...register('dodge')}
                defaultValue={skills.dexterity.dodge}
              />
            </div>
            <div>
              <h4>FURTIVIDADE:</h4>
              <Input
                type="number"
                {...register('stealth')}
                defaultValue={skills.dexterity.stealth}
              />
            </div>
            <div>
              <h4>ESCORDER-SE:</h4>
              <Input
                type="number"
                {...register('hide')}
                defaultValue={skills.dexterity.hide}
              />
            </div>
            <div>
              <h4>DIRIGIR:</h4>
              <Input
                type="number"
                {...register('drive')}
                defaultValue={skills.dexterity.drive}
              />
            </div>
            <div>
              <h4>PILOTAR:</h4>
              <Input
                type="number"
                {...register('pilot')}
                defaultValue={skills.dexterity.pilot}
              />
            </div>
            <div>
              <h4>CONTRA-ATAQUE:</h4>
              <Input
                type="number"
                {...register('counterattack')}
                defaultValue={skills.dexterity.counterattack}
              />
            </div>
            <div>
              <h4>PRESTIDIGITAÇÃO:</h4>
              <Input
                type="number"
                {...register('prestidigitation')}
                defaultValue={skills.dexterity.prestidigitation}
              />
            </div>
          </SkillItem>
          <SkillItem name="Inteligência">
            <div>
              <h4>ANTROPOLOGIA:</h4>
              <Input
                type="number"
                {...register('anthropology')}
                defaultValue={skills.intelligence.anthropology}
              />
            </div>
            <div>
              <h4>ARQUEOLOGIA:</h4>
              <Input
                type="number"
                {...register('archeology')}
                defaultValue={skills.intelligence.archeology}
              />
            </div>
            <div>
              <h4>ASTRONOMIA:</h4>
              <Input
                type="number"
                {...register('astronomy')}
                defaultValue={skills.intelligence.astronomy}
              />
            </div>
            <div>
              <h4>BIOLOGIA:</h4>
              <Input
                type="number"
                {...register('biology')}
                defaultValue={skills.intelligence.biology}
              />
            </div>
            <div>
              <h4>COMPUTAÇÃO:</h4>
              <Input
                type="number"
                {...register('computing')}
                defaultValue={skills.intelligence.computing}
              />
            </div>
            <div>
              <h4>CONTABILIDADE:</h4>
              <Input
                type="number"
                {...register('accounting')}
                defaultValue={skills.intelligence.accounting}
              />
            </div>
            <div>
              <h4>CRÉDITO:</h4>
              <Input
                type="number"
                {...register('credit')}
                defaultValue={skills.intelligence.credit}
              />
            </div>
            <div>
              <h4>DIREITO:</h4>
              <Input
                type="number"
                {...register('right')}
                defaultValue={skills.intelligence.right}
              />
            </div>
            <div>
              <h4>ELETRÔNICA:</h4>
              <Input
                type="number"
                {...register('electronics')}
                defaultValue={skills.intelligence.electronics}
              />
            </div>
            <div>
              <h4>FARMÁCIA:</h4>
              <Input
                type="number"
                {...register('drugstore')}
                defaultValue={skills.intelligence.drugstore}
              />
            </div>
            <div>
              <h4>FÍSICA:</h4>
              <Input
                type="number"
                {...register('physical')}
                defaultValue={skills.intelligence.physical}
              />
            </div>
            <div>
              <h4>GEOLOGIA:</h4>
              <Input
                type="number"
                {...register('geology')}
                defaultValue={skills.intelligence.geology}
              />
            </div>
            <div>
              <h4>MEDICINA:</h4>
              <Input
                type="number"
                {...register('medicine')}
                defaultValue={skills.intelligence.medicine}
              />
            </div>
            <div>
              <h4>NAVEGAR:</h4>
              <Input
                type="number"
                {...register('navigate')}
                defaultValue={skills.intelligence.navigate}
              />
            </div>
            <div>
              <h4>OUTRA LINGUA:</h4>
              <Input
                type="number"
                {...register('anotherLanguage')}
                defaultValue={skills.intelligence.anotherLanguage}
              />
            </div>
            <div>
              <h4>PRIMEIROS SOCORROS:</h4>
              <Input
                type="number"
                {...register('firstAid')}
                defaultValue={skills.intelligence.firstAid}
              />
            </div>
            <div>
              <h4>PSICANÁLISE:</h4>
              <Input
                type="number"
                {...register('psychoanalysis')}
                defaultValue={skills.intelligence.psychoanalysis}
              />
            </div>
            <div>
              <h4>PSICOLOGIA:</h4>
              <Input
                type="number"
                {...register('psychology')}
                defaultValue={skills.intelligence.psychology}
              />
            </div>
            <div>
              <h4>QUÍMICA:</h4>
              <Input
                type="number"
                {...register('chemical')}
                defaultValue={skills.intelligence.chemical}
              />
            </div>
            <div>
              <h4>RASTREAR:</h4>
              <Input
                type="number"
                {...register('trackBack')}
                defaultValue={skills.intelligence.trackBack}
              />
            </div>
            <div>
              <h4>REPARO ELÉTRICO:</h4>
              <Input
                type="number"
                {...register('electricalRepair')}
                defaultValue={skills.intelligence.electricalRepair}
              />
            </div>
            <div>
              <h4>REPARO MECÂNICO:</h4>
              <Input
                type="number"
                {...register('mechanicalRepair')}
                defaultValue={skills.intelligence.mechanicalRepair}
              />
            </div>
          </SkillItem>
          <SkillItem name="Carisma">
            <div>
              <h4>BARGANHA:</h4>
              <Input
                type="number"
                {...register('bargain')}
                defaultValue={skills.charisma.bargain}
              />
            </div>
            <div>
              <h4>DISFARCE:</h4>
              <Input
                type="number"
                {...register('disguise')}
                defaultValue={skills.charisma.disguise}
              />
            </div>
            <div>
              <h4>LÁBIA:</h4>
              <Input
                type="number"
                {...register('lipService')}
                defaultValue={skills.charisma.lipService}
              />
            </div>
            <div>
              <h4>OCULTAR:</h4>
              <Input
                type="number"
                {...register('cover')}
                defaultValue={skills.charisma.cover}
              />
            </div>
            <div>
              <h4>PERSUADIR:</h4>
              <Input
                type="number"
                {...register('persuade')}
                defaultValue={skills.charisma.persuade}
              />
            </div>
            <div>
              <h4>CHARME:</h4>
              <Input
                type="number"
                {...register('charm')}
                defaultValue={skills.charisma.charm}
              />
            </div>
            <div>
              <h4>ENGANAR:</h4>
              <Input
                type="number"
                {...register('trick')}
                defaultValue={skills.charisma.trick}
              />
            </div>
          </SkillItem>
        </GridContent>
      </form>
    </Container>
  );
}
