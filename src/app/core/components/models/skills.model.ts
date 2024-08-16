// export interface Skills{
//     skillName : string,
//     skillTechnolgy:string,
//     isActive:number
// }

// export interface SubTechSkill{
//     skillName:string,
//     isActive:number
// }
export interface TechSkills {
    skillName: string;
    skillTechnolgy: string;
    isActive: number;
  }
  
  export interface SoftSkills {
    skillName: string;
    skillDes: string;
    isActive: number;
  }
// export interface TechSkill {
//     id: string;  // Use `string` for GUIDs in Angular
//     skillName: string;
//     skillTechnolgy: string;
//     isActive: number;
//     subTechSkills?: SubTechSkill[];  // This is optional and may be undefined
//   }