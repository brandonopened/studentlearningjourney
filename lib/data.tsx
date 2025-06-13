import { GraduationCap, BookOpen, School, Building2, Award, Briefcase, ClipboardCheck } from "lucide-react"
import PreKView from "@/components/pretty-views/pre-k-view"
import ElementaryView from "@/components/pretty-views/elementary-view"
import EdFiView from "@/components/pretty-views/edfi-view"
import MiddleSchoolView from "@/components/pretty-views/middle-school-view"
import HighSchoolView from "@/components/pretty-views/high-school-view"
import CtdlView from "@/components/pretty-views/ctdl-view"
import CareerView from "@/components/pretty-views/career-view"
import ClrView from "@/components/pretty-views/clr-view"
import type { JourneyData } from "@/lib/types"

// Pre-K CASE Framework data
const preKData = {
  identifier: "1ff5dc7c-cd2a-417a-a9a2-11124c69d5ce",
  uri: "https://satchelcommons.com/ims/case/v1p0/CFItems/1ff5dc7c-cd2a-417a-a9a2-11124c69d5ce",
  fullStatement: "Child attends to, understands, and responds to communication and language from others.",
  humanCodingScheme: "IT-LC.1",
  CFItemType: "Goal",
  language: "en",
  lastChangeDateTime: "2023-07-03T21:21:14+00:00",
  CFItemTypeURI: {
    title: "Goal",
    identifier: "74fca519-ffbe-4524-bc08-4043c07e2307",
    uri: "https://satchelcommons.com/ims/case/v1p0/CFItemTypes/74fca519-ffbe-4524-bc08-4043c07e2307",
  },
  educationLevel: ["PK"],
}

// Elementary School CASE Network data (K-3)
const elementaryData = {
  identifier: "5ebef44d-d7cc-11e8-824f-0242ac160002",
  uri: "https://satchelcommons.com/ims/case/v1p0/CFItems/5ebef44d-d7cc-11e8-824f-0242ac160002",
  fullStatement:
    "Interpret products of whole numbers, e.g., interpret 5 $\\times$ 7 as the total number of objects in 5 groups of 7 objects each. *For example, describe a context in which a total number of objects can be expressed as 5 $\\times$ 7.*",
  humanCodingScheme: "3.OA.A.1",
  CFItemType: "Standard",
  educationLevel: ["03"],
  language: "en",
  lastChangeDateTime: "2025-04-12T02:38:51+00:00",
  CFItemTypeURI: {
    title: "Standard",
    identifier: "5e25f649-c4b0-4f81-b32a-4b92ab800046",
    uri: "https://satchelcommons.com/ims/case/v1p0/CFItemTypes/5e25f649-c4b0-4f81-b32a-4b92ab800046",
  },
  school: {
    name: "Community Christian Elementary School",
    district: "Private School",
    location: "Visalia, CA",
  },
}

// EdFi 3rd Grade Assessment Data
const edFiAssessmentData = {
  studentUniqueId: "BD-1991-001",
  studentPersonalIdentificationSystemDescriptor: "uri://ed-fi.org/StudentIdentificationSystemDescriptor#School",
  student: {
    studentUniqueId: "BD-1991-001",
    firstName: "Brandon",
    lastSurname: "Dorman",
    birthDate: "1984-03-15",
  },
  school: {
    schoolId: 255901001,
    nameOfInstitution: "Community Christian Elementary School",
    schoolTypeDescriptor: "uri://ed-fi.org/SchoolTypeDescriptor#Elementary",
    addresses: [
      {
        addressTypeDescriptor: "uri://ed-fi.org/AddressTypeDescriptor#Physical",
        city: "Visalia",
        stateAbbreviationDescriptor: "uri://ed-fi.org/StateAbbreviationDescriptor#CA",
        postalCode: "93277",
      },
    ],
  },
  assessments: [
    {
      assessmentIdentifier: "CA-MATH-GRADE3-1991",
      namespace: "uri://ca.gov/assessment",
      assessmentTitle: "California Mathematics Assessment - Grade 3",
      assessmentCategoryDescriptor: "uri://ed-fi.org/AssessmentCategoryDescriptor#State summative assessment 3-8",
      assessmentForm: "Spring 1991",
      maxRawScore: 100,
      nomenclature: "CA Math Grade 3",
      assessmentPeriodDescriptor: "uri://ed-fi.org/AssessmentPeriodDescriptor#End of Year",
      academicSubjects: [
        {
          academicSubjectDescriptor: "uri://ed-fi.org/AcademicSubjectDescriptor#Mathematics",
        },
      ],
      assessedGradeLevels: [
        {
          gradeLevelDescriptor: "uri://ed-fi.org/GradeLevelDescriptor#Third grade",
        },
      ],
      objectiveAssessments: [
        {
          identificationCode: "OBJ-1",
          description: "Number Sense and Operations",
          maxRawScore: 25,
          percentOfAssessment: 25.0,
        },
        {
          identificationCode: "OBJ-2",
          description: "Algebraic Thinking",
          maxRawScore: 25,
          percentOfAssessment: 25.0,
        },
        {
          identificationCode: "OBJ-3",
          description: "Geometry and Measurement",
          maxRawScore: 25,
          percentOfAssessment: 25.0,
        },
        {
          identificationCode: "OBJ-4",
          description: "Data Analysis and Probability",
          maxRawScore: 25,
          percentOfAssessment: 25.0,
        },
      ],
    },
  ],
  studentAssessments: [
    {
      assessmentIdentifier: "CA-MATH-GRADE3-1991",
      namespace: "uri://ca.gov/assessment",
      studentUniqueId: "BD-1991-001",
      schoolYear: 1991,
      administrationDate: "1991-05-15",
      administrationEndDate: "1991-05-15",
      serialNumber: "0001234567",
      whenAssessedGradeLevelDescriptor: "uri://ed-fi.org/GradeLevelDescriptor#Third grade",
      studentObjectiveAssessments: [
        {
          identificationCode: "OBJ-1",
          objectiveAssessmentReference: {
            assessmentIdentifier: "CA-MATH-GRADE3-1991",
            identificationCode: "OBJ-1",
            namespace: "uri://ca.gov/assessment",
          },
          scoreResults: [
            {
              assessmentReportingMethodDescriptor: "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Raw score",
              result: "23",
              resultDatatypeTypeDescriptor: "uri://ed-fi.org/ResultDatatypeTypeDescriptor#Integer",
            },
            {
              assessmentReportingMethodDescriptor:
                "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Percentage score",
              result: "92",
              resultDatatypeTypeDescriptor: "uri://ed-fi.org/ResultDatatypeTypeDescriptor#Percentage",
            },
          ],
          performanceLevels: [
            {
              assessmentReportingMethodDescriptor:
                "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Achievement Level",
              performanceLevelDescriptor: "uri://ca.gov/PerformanceLevelDescriptor#Advanced",
              performanceLevelMet: true,
            },
          ],
        },
        {
          identificationCode: "OBJ-2",
          objectiveAssessmentReference: {
            assessmentIdentifier: "CA-MATH-GRADE3-1991",
            identificationCode: "OBJ-2",
            namespace: "uri://ca.gov/assessment",
          },
          scoreResults: [
            {
              assessmentReportingMethodDescriptor: "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Raw score",
              result: "22",
              resultDatatypeTypeDescriptor: "uri://ed-fi.org/ResultDatatypeTypeDescriptor#Integer",
            },
            {
              assessmentReportingMethodDescriptor:
                "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Percentage score",
              result: "88",
              resultDatatypeTypeDescriptor: "uri://ed-fi.org/ResultDatatypeTypeDescriptor#Percentage",
            },
          ],
          performanceLevels: [
            {
              assessmentReportingMethodDescriptor:
                "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Achievement Level",
              performanceLevelDescriptor: "uri://ca.gov/PerformanceLevelDescriptor#Proficient",
              performanceLevelMet: true,
            },
          ],
        },
        {
          identificationCode: "OBJ-3",
          objectiveAssessmentReference: {
            assessmentIdentifier: "CA-MATH-GRADE3-1991",
            identificationCode: "OBJ-3",
            namespace: "uri://ca.gov/assessment",
          },
          scoreResults: [
            {
              assessmentReportingMethodDescriptor: "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Raw score",
              result: "24",
              resultDatatypeTypeDescriptor: "uri://ed-fi.org/ResultDatatypeTypeDescriptor#Integer",
            },
            {
              assessmentReportingMethodDescriptor:
                "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Percentage score",
              result: "96",
              resultDatatypeTypeDescriptor: "uri://ed-fi.org/ResultDatatypeTypeDescriptor#Percentage",
            },
          ],
          performanceLevels: [
            {
              assessmentReportingMethodDescriptor:
                "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Achievement Level",
              performanceLevelDescriptor: "uri://ca.gov/PerformanceLevelDescriptor#Advanced",
              performanceLevelMet: true,
            },
          ],
        },
        {
          identificationCode: "OBJ-4",
          objectiveAssessmentReference: {
            assessmentIdentifier: "CA-MATH-GRADE3-1991",
            identificationCode: "OBJ-4",
            namespace: "uri://ca.gov/assessment",
          },
          scoreResults: [
            {
              assessmentReportingMethodDescriptor: "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Raw score",
              result: "21",
              resultDatatypeTypeDescriptor: "uri://ed-fi.org/ResultDatatypeTypeDescriptor#Integer",
            },
            {
              assessmentReportingMethodDescriptor:
                "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Percentage score",
              result: "84",
              resultDatatypeTypeDescriptor: "uri://ed-fi.org/ResultDatatypeTypeDescriptor#Percentage",
            },
          ],
          performanceLevels: [
            {
              assessmentReportingMethodDescriptor:
                "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Achievement Level",
              performanceLevelDescriptor: "uri://ca.gov/PerformanceLevelDescriptor#Proficient",
              performanceLevelMet: true,
            },
          ],
        },
      ],
      scoreResults: [
        {
          assessmentReportingMethodDescriptor: "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Raw score",
          result: "90",
          resultDatatypeTypeDescriptor: "uri://ed-fi.org/ResultDatatypeTypeDescriptor#Integer",
        },
        {
          assessmentReportingMethodDescriptor: "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Percentage score",
          result: "90",
          resultDatatypeTypeDescriptor: "uri://ed-fi.org/ResultDatatypeTypeDescriptor#Percentage",
        },
        {
          assessmentReportingMethodDescriptor: "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Scale score",
          result: "2850",
          resultDatatypeTypeDescriptor: "uri://ed-fi.org/ResultDatatypeTypeDescriptor#Integer",
        },
      ],
      performanceLevels: [
        {
          assessmentReportingMethodDescriptor: "uri://ed-fi.org/AssessmentReportingMethodDescriptor#Achievement Level",
          performanceLevelDescriptor: "uri://ca.gov/PerformanceLevelDescriptor#Proficient",
          performanceLevelMet: true,
        },
      ],
    },
  ],
  schoolYear: 1991,
  sessionName: "Spring 1991",
}

// Middle School OneRoster data
const middleSchoolData = {
  academicSession: {
    id: "1996-MS-S1",
    name: "7th Grade",
    startDate: "1996-08-15",
    endDate: "1996-12-20",
    type: "semester",
    schoolYear: "1996-1997",
  },
  student: {
    sourcedId: "S-9876",
    status: "active",
    firstName: "Brandon",
    lastName: "Dorman",
    gradeLevel: "7",
    email: "brandon.d@vusd.org",
  },
  school: {
    name: "La Joya Middle School",
    district: "Visalia Unified School District",
    location: "Visalia, CA",
  },
  courses: [
    {
      sourcedId: "C-MATH-7",
      title: "Pre-Algebra",
      subject: "Mathematics",
      grade: "A-",
    },
    {
      sourcedId: "C-SCI-7",
      title: "Life Science",
      subject: "Science",
      grade: "B+",
    },
    {
      sourcedId: "C-ELA-7",
      title: "English Language Arts",
      subject: "English",
      grade: "A",
    },
    {
      sourcedId: "C-SOC-7",
      title: "World Geography",
      subject: "Social Studies",
      grade: "B",
    },
  ],
}

// High School Open Badge 3.0 data
const highSchoolData = {
  "@context": ["https://www.w3.org/2018/credentials/v1", "https://purl.imsglobal.org/spec/ob/v3p0/context.json"],
  type: ["VerifiableCredential", "OpenBadgeCredential"],
  id: "urn:uuid:high-school-diploma-2001",
  name: "High School Diploma",
  description: "High School Diploma awarded upon successful completion of secondary education requirements",
  issuer: {
    id: "did:web:mtwhitney.vusd.org",
    type: "Profile",
    name: "Mt Whitney High School",
    url: "https://mtwhitney.vusd.org",
    image: "https://mtwhitney.vusd.org/logo.png",
    address: {
      locality: "Visalia",
      region: "CA",
      country: "US",
    },
  },
  issuanceDate: "2001-06-15T00:00:00Z",
  validFrom: "2001-06-15T00:00:00Z",
  credentialSubject: {
    id: "did:example:student-brandon-dorman",
    type: "AchievementSubject",
    name: "Brandon Dorman",
    achievement: {
      id: "https://mtwhitney.vusd.org/achievements/diploma",
      type: "Achievement",
      name: "High School Diploma",
      description:
        "Awarded to students who have successfully completed all graduation requirements including core academic subjects, electives, and state assessments.",
      criteria: {
        narrative:
          "Student must earn minimum 24 credits including 4 English, 4 Math, 3 Science, 3 Social Studies, and pass state assessments.",
      },
      skillsEarned: [
        "Critical Thinking",
        "Mathematical Reasoning",
        "Scientific Inquiry",
        "Written Communication",
        "Research Skills",
        "Problem Solving",
      ],
    },
    result: {
      type: "Result",
      gpa: "3.85",
      classRank: 16,
      classSize: 400,
      creditsEarned: 28,
      graduationDate: "2001-06-15",
      schoolLocation: "Visalia, CA",
      yearsAttended: "1997-2001",
    },
  },
}

// College CTDL (Credential Engine) data
const collegeCtdlData = {
  "@context": "https://credreg.net/ctdl/schema/context/json",
  "@type": "ceterms:Degree",
  "@id": "https://credentialengine.org/resources/ce-8f5b4a2e-1d3c-4f7a-9b00-2fa8c7d5e4c1",
  "ceterms:ctid": "ce-8f5b4a2e-1d3c-4f7a-9b00-2fa8c7d5e4c1",
  "ceterms:name": {
    en: "Bachelor of Arts in Mathematics – Secondary Teaching & Psychology",
  },
  "ceterms:description": {
    en: "Awarded Bachelor of Arts from Fresno Pacific University upon completion of required coursework and a minimum cumulative GPA of 2.0. This interdisciplinary degree combines mathematical analysis with psychological research methods and secondary education pedagogy.",
  },
  "ceterms:subjectWebpage": "https://www.fresno.edu/programs/mathematics-psychology",
  "ceterms:ownedBy": [
    {
      "@type": "ceterms:CredentialOrganization",
      "@id": "https://credentialengine.org/organizations/fresno-pacific-university",
      "ceterms:name": {
        en: "Fresno Pacific University",
      },
      "ceterms:subjectWebpage": "https://www.fresno.edu",
      "ceterms:address": [
        {
          "@type": "ceterms:Place",
          "ceterms:addressRegion": "CA",
          "ceterms:addressLocality": "Fresno",
          "ceterms:postalCode": "93702",
          "ceterms:streetAddress": "1717 S Chestnut Ave",
        },
      ],
    },
  ],
  "ceterms:offeredBy": [
    {
      "@id": "https://credentialengine.org/organizations/fresno-pacific-university",
    },
  ],
  "ceterms:degreeConcentration": [
    {
      en: "Mathematics",
    },
    {
      en: "Psychology",
    },
    {
      en: "Secondary Teaching",
    },
  ],
  "ceterms:degreeMajor": [
    {
      en: "Mathematics",
    },
    {
      en: "Psychology",
    },
  ],
  "ceterms:credentialStatusType": {
    "@type": "ceterms:CredentialStatusType",
    "ceterms:termName": {
      en: "Active",
    },
  },
  "ceterms:dateEffective": "2005-05-05",
  "ceterms:estimatedDuration": [
    {
      "@type": "ceterms:DurationProfile",
      "ceterms:exactDuration": "P4Y",
      "ceterms:description": {
        en: "4 years full-time study",
      },
    },
  ],
  "ceterms:requires": [
    {
      "@type": "ceterms:ConditionProfile",
      "ceterms:description": {
        en: "Completion of 131 earned credits, all core and elective requirements, and a cumulative GPA of 3.8561.",
      },
      "ceterms:creditHourType": {
        "@type": "ceterms:CreditHourType",
        "ceterms:termName": {
          en: "Semester Hour",
        },
      },
      "ceterms:creditHourValue": 131,
      "ceterms:minimumAge": 18,
    },
  ],
  "ceterms:teaches": [
    {
      "@type": "ceterms:CredentialAlignmentObject",
      "ceterms:targetName": {
        en: "Mathematical Analysis",
      },
      "ceterms:targetDescription": {
        en: "Advanced mathematical concepts including calculus, linear algebra, and statistical analysis",
      },
    },
    {
      "@type": "ceterms:CredentialAlignmentObject",
      "ceterms:targetName": {
        en: "Educational Psychology",
      },
      "ceterms:targetDescription": {
        en: "Understanding of learning theories, cognitive development, and educational assessment",
      },
    },
    {
      "@type": "ceterms:CredentialAlignmentObject",
      "ceterms:targetName": {
        en: "Secondary Education Pedagogy",
      },
      "ceterms:targetDescription": {
        en: "Teaching methods, curriculum design, and classroom management for secondary education",
      },
    },
    {
      "@type": "ceterms:CredentialAlignmentObject",
      "ceterms:targetName": {
        en: "Research Methods",
      },
      "ceterms:targetDescription": {
        en: "Quantitative and qualitative research methodologies in psychology and education",
      },
    },
  ],
  "ceterms:industryType": [
    {
      "@type": "ceterms:CredentialAlignmentObject",
      "ceterms:framework": "https://www.bls.gov/soc/",
      "ceterms:targetName": {
        en: "Education, Training, and Library Occupations",
      },
      "ceterms:targetNode": "https://www.bls.gov/soc/2018/major_groups.htm#25-0000",
    },
  ],
  "ceterms:occupationType": [
    {
      "@type": "ceterms:CredentialAlignmentObject",
      "ceterms:framework": "https://www.bls.gov/soc/",
      "ceterms:targetName": {
        en: "Secondary School Teachers",
      },
      "ceterms:targetNode": "https://www.bls.gov/soc/2018/detailed/25-2031.htm",
    },
    {
      "@type": "ceterms:CredentialAlignmentObject",
      "ceterms:framework": "https://www.bls.gov/soc/",
      "ceterms:targetName": {
        en: "Psychologists",
      },
      "ceterms:targetNode": "https://www.bls.gov/soc/2018/detailed/19-3039.htm",
    },
  ],
  "ceterms:accreditedBy": [
    {
      "@type": "ceterms:QACredentialOrganization",
      "ceterms:name": {
        en: "WASC Senior College and University Commission",
      },
      "ceterms:subjectWebpage": "https://www.wscuc.org/",
    },
  ],
  "ceterms:inLanguage": ["en"],
  "ceterms:availableOnlineAt": ["https://www.fresno.edu/admissions"],
  "ceterms:availabilityListing": ["https://www.fresno.edu/programs/mathematics-psychology"],
}

// Early Career LER-RS data (2006)
const earlyCareerData = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/clr/v2p0/context.json",
    "https://purl.imsglobal.org/spec/ob/v3p0/context.json",
  ],
  type: ["VerifiableCredential", "ClrCredential"],
  id: "urn:uuid:20060901000000000001",
  name: "Brandon Dorman – Early Career Record",
  description:
    "Beginning mathematics educator with strong foundation in mathematical concepts and passion for student learning. Dedicated to creating engaging learning environments and helping students develop mathematical reasoning skills.",
  issuanceDate: "2006-09-01T00:00:00.000Z",
  credentialSubject: {
    type: "ClrSubject",
    skills: ["Mathematics Education", "Classroom Management", "Lesson Planning", "Student Assessment"],
    experience: [
      "Math Teacher \t 09/2006 - 06/2015",
      "Fresno Unified School District",
      "Designed and delivered engaging math lessons aligned with curriculum standards, ensuring effective student learning outcomes.",
      "Simplified complex mathematical concepts through diverse teaching methods to accommodate various learning styles.",
      "Engaged with parents and guardians to provide updates on student progress, fostering strong home-school communication.",
      "Managed and maintained accurate records of attendance, grades, and student performance to ensure accountability and compliance.",
      "Actively participated in school events, open houses, and parent-teacher conferences to support student success and community engagement.",
    ],
    education: ["BA: Math and Psychology \t 2005", "Fresno Pacific University"],
    profiles: [],
    awards: ["California Teaching Credential, 2006", "Outstanding New Teacher Recognition, Fresno USD, 2007"],
  },
}

// Career CLR data with actual Credly badges
const careerClrData = {
  "@context": ["https://www.w3.org/2018/credentials/v1", "https://purl.imsglobal.org/spec/clr/v2p0/context.json"],
  id: "urn:uuid:20230531000801107940",
  type: ["VerifiableCredential", "CLRCredential"],
  issuer: {
    id: "https://professional-portfolio.org/issuers/career-advancement",
    name: "Professional Portfolio Services",
    url: "https://professional-portfolio.org",
    image: "https://professional-portfolio.org/logo.png",
  },
  issuanceDate: "2023-05-31T00:08:01.108152Z",
  name: "Brandon Dorman - Professional Portfolio",
  description:
    "Comprehensive Learner Record documenting professional achievements, certifications, and career progression in educational technology and product management.",
  credentialSubject: {
    id: "did:example:brandon-dorman",
    type: "CLRPerson",
    name: "Brandon Dorman",
    achievements: [
      {
        id: "urn:uuid:achievement-safe-agilist",
        type: "Achievement",
        name: "Certified SAFe® 4 Agilist",
        description: "Certification in Scaled Agile Framework (SAFe) for enterprise agile transformation.",
        achievementType: "Certification",
        creator: {
          id: "https://www.scaledagile.com",
          name: "Scaled Agile Inc",
          url: "https://www.scaledagile.com",
        },
        achievedDate: "2019-04-29",
        expirationDate: "2020-04-29",
        sourceCredential: "https://www.credly.com/badges/certified-safe-4-agilist",
        alignments: [
          {
            targetName: "Agile Leadership",
            targetType: "Competency",
            targetDescription: "Leading agile transformation at enterprise scale",
          },
          {
            targetName: "Lean-Agile Principles",
            targetType: "Skill",
            targetDescription: "Application of lean-agile principles and practices",
          },
        ],
      },
      {
        id: "urn:uuid:achievement-data-science-foundations",
        type: "Achievement",
        name: "Data Science Foundations - Level 1",
        description: "Foundational knowledge in data science concepts, tools, and methodologies.",
        achievementType: "Certification",
        creator: {
          id: "https://www.ibm.com",
          name: "IBM",
          url: "https://www.ibm.com",
        },
        achievedDate: "2019-08-13",
        sourceCredential: "https://www.credly.com/badges/data-science-foundations-level-1",
        alignments: [
          {
            targetName: "Data Science Fundamentals",
            targetType: "Competency",
            targetDescription: "Understanding of core data science concepts and methodologies",
          },
        ],
      },
      {
        id: "urn:uuid:achievement-data-science-orientation",
        type: "Achievement",
        name: "Data Science Orientation",
        description: "Introduction to data science field, career paths, and foundational concepts.",
        achievementType: "Certification",
        creator: {
          id: "https://www.coursera.org",
          name: "Coursera",
          url: "https://www.coursera.org",
        },
        achievedDate: "2021-04-09",
        sourceCredential: "https://www.credly.com/badges/data-science-orientation",
        alignments: [
          {
            targetName: "Data Science Career Awareness",
            targetType: "Knowledge",
            targetDescription: "Understanding of data science roles and career pathways",
          },
        ],
      },
      {
        id: "urn:uuid:achievement-tools-for-data-science",
        type: "Achievement",
        name: "Tools for Data Science",
        description: "Proficiency in essential tools and technologies used in data science workflows.",
        achievementType: "Certification",
        creator: {
          id: "https://www.coursera.org",
          name: "Coursera",
          url: "https://www.coursera.org",
        },
        achievedDate: "2021-05-04",
        sourceCredential: "https://www.credly.com/badges/tools-for-data-science",
        alignments: [
          {
            targetName: "Data Science Tools",
            targetType: "Skill",
            targetDescription: "Proficiency in Jupyter, R, Python, and other data science tools",
          },
        ],
      },
      {
        id: "urn:uuid:achievement-data-science-methodology",
        type: "Achievement",
        name: "Data Science Methodology",
        description: "Understanding of systematic approaches to data science problem solving.",
        achievementType: "Certification",
        creator: {
          id: "https://www.coursera.org",
          name: "Coursera",
          url: "https://www.coursera.org",
        },
        achievedDate: "2021-09-23",
        sourceCredential: "https://www.credly.com/badges/data-science-methodology",
        alignments: [
          {
            targetName: "Data Science Process",
            targetType: "Competency",
            targetDescription: "Systematic approach to data science project lifecycle",
          },
        ],
      },
      {
        id: "urn:uuid:achievement-python-data-science-ai",
        type: "Achievement",
        name: "Python for Data Science and AI",
        description:
          "Python programming skills specifically for data science and artificial intelligence applications.",
        achievementType: "Certification",
        creator: {
          id: "https://www.coursera.org",
          name: "Coursera",
          url: "https://www.coursera.org",
        },
        achievedDate: "2021-11-07",
        sourceCredential: "https://www.credly.com/badges/python-for-data-science-and-ai",
        alignments: [
          {
            targetName: "Python Programming",
            targetType: "Skill",
            targetDescription: "Python programming for data analysis and machine learning",
          },
          {
            targetName: "AI Development",
            targetType: "Skill",
            targetDescription: "Application of Python in artificial intelligence development",
          },
        ],
      },
      {
        id: "urn:uuid:achievement-machine-learning-python",
        type: "Achievement",
        name: "Machine Learning with Python",
        description: "Implementation of machine learning algorithms and models using Python.",
        achievementType: "Certification",
        creator: {
          id: "https://www.coursera.org",
          name: "Coursera",
          url: "https://www.coursera.org",
        },
        achievedDate: "2022-12-07",
        sourceCredential: "https://www.credly.com/badges/machine-learning-with-python",
        alignments: [
          {
            targetName: "Machine Learning",
            targetType: "Competency",
            targetDescription: "Design and implementation of machine learning solutions",
          },
          {
            targetName: "Python ML Libraries",
            targetType: "Skill",
            targetDescription: "Proficiency in scikit-learn, pandas, and other ML libraries",
          },
        ],
      },
      {
        id: "urn:uuid:achievement-python-project-data-science",
        type: "Achievement",
        name: "Python Project for Data Science",
        description: "Hands-on project demonstrating Python skills in real-world data science scenarios.",
        achievementType: "Certification",
        creator: {
          id: "https://www.coursera.org",
          name: "Coursera",
          url: "https://www.coursera.org",
        },
        achievedDate: "2022-12-09",
        sourceCredential: "https://www.credly.com/badges/python-project-for-data-science",
        alignments: [
          {
            targetName: "Applied Data Science",
            targetType: "Competency",
            targetDescription: "Application of data science skills to real-world projects",
          },
        ],
      },
      {
        id: "urn:uuid:achievement-data-analysis-python",
        type: "Achievement",
        name: "Data Analysis with Python",
        description: "Advanced data analysis techniques and statistical methods using Python.",
        achievementType: "Certification",
        creator: {
          id: "https://www.coursera.org",
          name: "Coursera",
          url: "https://www.coursera.org",
        },
        achievedDate: "2023-01-16",
        sourceCredential: "https://www.credly.com/badges/data-analysis-with-python",
        alignments: [
          {
            targetName: "Statistical Analysis",
            targetType: "Competency",
            targetDescription: "Advanced statistical analysis and hypothesis testing",
          },
          {
            targetName: "Data Manipulation",
            targetType: "Skill",
            targetDescription: "Data cleaning, transformation, and analysis with pandas",
          },
        ],
      },
      {
        id: "urn:uuid:achievement-data-visualization-python",
        type: "Achievement",
        name: "Data Visualization with Python",
        description: "Creating effective data visualizations and dashboards using Python libraries.",
        achievementType: "Certification",
        creator: {
          id: "https://www.coursera.org",
          name: "Coursera",
          url: "https://www.coursera.org",
        },
        achievedDate: "2023-03-12",
        sourceCredential: "https://www.credly.com/badges/data-visualization-with-python",
        alignments: [
          {
            targetName: "Data Visualization",
            targetType: "Competency",
            targetDescription: "Design and creation of effective data visualizations",
          },
          {
            targetName: "Python Visualization Libraries",
            targetType: "Skill",
            targetDescription: "Proficiency in matplotlib, seaborn, and plotly",
          },
        ],
      },
    ],
    profiles: [
      {
        id: "https://www.linkedin.com/in/brandondorman",
        type: "Profile",
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brandondorman",
      },
      {
        id: "https://skillsandstandards.substack.com/",
        type: "Profile",
        name: "Skills & Standards Blog",
        url: "https://skillsandstandards.substack.com/",
      },
      {
        id: "https://github.com/brandonopened",
        type: "Profile",
        name: "GitHub",
        url: "https://github.com/brandonopened",
      },
      {
        id: "https://www.credly.com/users/brandon-dorman",
        type: "Profile",
        name: "Credly",
        url: "https://www.credly.com/users/brandon-dorman",
      },
    ],
  },
  proof: {
    type: "Ed25519Signature2020",
    created: "2023-05-31T00:08:01Z",
    verificationMethod: "https://professional-portfolio.org/issuers/career-advancement#key-1",
    proofPurpose: "assertionMethod",
    proofValue: "z58DAdFfa9SkqZMVPxAQpic6FuWQV2cEiTKw4QKQVFKQ3RHXLJAXZqZ9tEW7KGXGFYzbNJSugk5cDLhkYcqrVeKu",
  },
}

export const educationalJourneyData: JourneyData[] = [
  {
    id: "pre-k",
    title: "Pre-K Education",
    year: "1987-1988",
    description: "Head Start Early Learning Outcomes",
    standard: "CASE Framework",
    icon: <GraduationCap className="h-4 w-4" />,
    prettyView: <PreKView data={preKData} />,
    rawData: preKData,
  },
  {
    id: "elementary-k3",
    title: "Elementary School (K-3)",
    year: "1988-1991",
    description: "Community Christian Elementary School - Learning Standards",
    standard: "CASE Network (1EdTech)",
    icon: <BookOpen className="h-4 w-4" />,
    prettyView: <ElementaryView data={elementaryData} />,
    rawData: elementaryData,
  },
  {
    id: "elementary-assessment",
    title: "3rd Grade Assessment",
    year: "1991",
    description: "California Mathematics Assessment - Grade 3",
    standard: "Ed-Fi Data Standard",
    icon: <ClipboardCheck className="h-4 w-4" />,
    prettyView: <EdFiView data={edFiAssessmentData} />,
    rawData: edFiAssessmentData,
  },
  {
    id: "middle-school",
    title: "Middle School",
    year: "1995-1997",
    description: "La Joya Middle School - 7th Grade Academic Record",
    standard: "OneRoster",
    icon: <School className="h-4 w-4" />,
    prettyView: <MiddleSchoolView data={middleSchoolData} />,
    rawData: middleSchoolData,
  },
  {
    id: "high-school",
    title: "High School",
    year: "1997-2001",
    description: "Mt Whitney High School, Visalia, CA - Ranked 16 out of 400",
    standard: "Open Badge 3.0",
    icon: <Building2 className="h-4 w-4" />,
    prettyView: <HighSchoolView data={highSchoolData} />,
    rawData: highSchoolData,
  },
  {
    id: "college",
    title: "College",
    year: "2005",
    description: "Bachelor's Degree Credential",
    standard: "CTDL (Credential Engine)",
    icon: <Award className="h-4 w-4" />,
    prettyView: <CtdlView data={collegeCtdlData} />,
    rawData: collegeCtdlData,
  },
  {
    id: "early-career",
    title: "Early Career",
    year: "2006",
    description: "Math Teacher",
    standard: "LER-RS",
    icon: <Briefcase className="h-4 w-4" />,
    prettyView: <CareerView data={earlyCareerData} />,
    rawData: earlyCareerData,
  },
  {
    id: "career",
    title: "Career Advancement",
    year: "2023",
    description: "Professional Certifications & Data Science Skills",
    standard: "CLR (1EdTech)",
    icon: <Briefcase className="h-4 w-4" />,
    prettyView: <ClrView data={careerClrData} />,
    rawData: careerClrData,
  },
]
