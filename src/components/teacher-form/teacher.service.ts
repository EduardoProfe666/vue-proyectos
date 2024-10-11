import ITeacher from "@/components/teacher-form/teacher.model";
import {ref, Ref} from "vue";

export default class TeacherService {
    private readonly teachers: Ref<ITeacher[]>

    constructor() {
        this.teachers = ref([
            {
                name: "Juan Pérez",
                email: "juan.perez@example.com",
                ci: "12345678901",
                phone: "555-1234",
                subject: "Sistema Operativo",
                doc: true,
            },
            {
                name: "María López",
                email: "maria.lopez@example.com",
                ci: "10987654321",
                phone: "555-5678",
                subject: "Programación Web",
                doc: false,
            },
            {
                name: "Carlos Fernández",
                email: "carlos.fernandez@example.com",
                ci: "11223344556",
                phone: "555-8765",
                subject: "Sistemas Distribuidos",
                doc: true,
            },
            {
                name: "Ana García",
                email: "ana.garcia@example.com",
                ci: "22334455667",
                phone: "555-4321",
                subject: "Sistema Operativo",
                doc: false,
            },
            {
                name: "Luis Martínez",
                email: "luis.martinez@example.com",
                ci: "33445566778",
                phone: "555-9876",
                subject: "Programación Web",
                doc: true,
            },
        ]);
    }

    getTeachers(){
        return this.teachers;
    }

    addTeacher(newTeacher: ITeacher){
        if(newTeacher.subject === ""){
            throw ("Seleccione una asignatura")
        }
        if (this.teachers.value.find(x => x.ci === newTeacher.ci)) {
            throw ("El profesor ya existe en el sistema")
        }

        this.teachers.value.push({...newTeacher})
    }

    removeAll(){
        this.teachers.value = []
    }
}