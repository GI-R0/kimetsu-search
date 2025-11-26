# ⚡ PokeSearch

Aplicación de búsqueda de Pokémon con **React**, **TailwindCSS** y **PokeAPI**.

## 🌟 Características

- 🔍 Búsqueda por nombre o ID
- 📱 Completamente responsive
- 🌓 Modo oscuro/claro persistente
- 🎨 Interfaz moderna con animaciones
- 📄 Paginación infinita
- ♿ Accesible (ARIA + navegación por teclado)

## 🛠️ Tecnologías

- React 19 + React Router DOM 7
- TailwindCSS 4
- React Hook Form 7
- Vite 7
- PokeAPI

## 🚀 Instalación

```bash
# Clonar e instalar
git clone <tu-repo-url>
cd kimetsu-search
npm install

# Desarrollo
npm run dev

# Producción
npm run build
npm run preview
```

## 🧠 Hooks Personalizados

### `usePokemon(name)`

Busca un Pokémon específico con manejo de carga y errores.

```jsx
const { data, loading, error } = usePokemon("pikachu");
```

### `usePokemonList()`

Lista paginada de Pokémon con función `loadMore()`.

```jsx
const { pokemonList, loading, loadMore } = usePokemonList();
```

### `useTheme()`

Gestión del tema claro/oscuro.

```jsx
const { theme, toggleTheme } = useTheme();
```

## 🌐 API

Consume [PokeAPI](https://pokeapi.co/):

- `GET /pokemon?limit=20&offset=0` - Lista paginada
- `GET /pokemon/{name}` - Detalles del Pokémon

Proyecto educativo de código abierto.

---

**Desarrollado con 💙 usando React + TailwindCSS**
