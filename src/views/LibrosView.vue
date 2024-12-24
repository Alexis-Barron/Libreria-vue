    <template>
        <main class="p-4 bg-gray-100 min-h-screen">
        <h1 class="text-2xl font-bold text-gray-700 mb-6 text-center">Lista de Libros</h1>
        <div class="overflow-x-auto shadow-md rounded-lg bg-white p-4">
            <table class="table-auto w-full border-collapse border border-gray-300 text-gray-700">
            <thead>
                <tr class="bg-gray-200 text-gray-700">
                <th class="border border-gray-300 px-4 py-2">ID</th>
                <th class="border border-gray-300 px-4 py-2">Título</th>
                <th class="border border-gray-300 px-4 py-2">Autor</th>
                <th class="border border-gray-300 px-4 py-2">Género</th>
                <th class="border border-gray-300 px-4 py-2">Precio</th>
                <th class="border border-gray-300 px-4 py-2">Disponibilidad</th>
                <th class="border border-gray-300 px-4 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                v-for="libro in libros" 
                :key="libro.id" 
                class="hover:bg-gray-100"
                >
                <td class="border border-gray-300 px-4 py-2 text-center">{{ libro.id }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ libro.titulo }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ libro.autor }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ libro.genero }}</td>
                <td class="border border-gray-300 px-4 py-2">{{ libro.precio }}</td>
                <td class="border border-gray-300 px-4 py-2 text-center">
                    <span 
                    :class="libro.disponibilidad ? 'text-green-600' : 'text-red-600'"
                    >
                    {{ libro.disponibilidad ? 'Disponible' : 'No Disponible' }}
                    </span>
                </td>
                <td class="border border-gray-300 px-4 py-2 text-center">
                    <RouterLink :to="{ path: 'editarLibro/' + libro.id }" class="text-blue-600 hover:underline mr-4">Editar</RouterLink>
                    <button @click="eliminarLibro(libro.id, libro.titulo)" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm">Eliminar</button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </main>
    </template>
    
    <script>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'
    
    export default {
        setup() {
        const libros = ref([])
    
        const listarLibros = async () => {
            try {
            const response = await axios.get("http://localhost:3000/libros")
            libros.value = response.data
            console.log(libros.value)
            } catch (error) {
            console.log("Error al cargar los libros", error)
            }
        }
    
        const eliminarLibro = async (id, titulo) => {
            const confirmDelete = window.confirm(`¿Estás seguro de eliminar el libro? ${titulo}`)
            if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:3000/libros/${id}`)
                listarLibros()
            } catch (error) {
                console.log('Error al eliminar el libro', error)
            }
            }
        }
    
        onMounted(() => {
            listarLibros()
        })
    
        return {
            libros,
            listarLibros,
            eliminarLibro
        }
        }
    }
    </script>
    