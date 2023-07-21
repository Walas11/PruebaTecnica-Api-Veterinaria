using Microsoft.EntityFrameworkCore;

namespace BKN_VeterinariaGranTitan.Models
{
  public class Mascotas
  {
    public int Id { get; set; }
    public string nombre { get; set; }
    public string especie { get; set; }
    public string raza { get; set; }
    public string fechaNacimiento { get; set; }
    public int IdDueno { get; set; }
    public DateTime fechaCreacion { get; set; }
  }
}
