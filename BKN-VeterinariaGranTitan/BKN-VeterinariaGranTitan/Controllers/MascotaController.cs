using BKN_VeterinariaGranTitan.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BKN_VeterinariaGranTitan.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  public class MascotaController : ControllerBase
  {

    private readonly AplicationDbContext _context;

    public MascotaController(AplicationDbContext context)
    {
      _context = context;
    }

    // LISTADO DE MASCOTAS EN EL VETERINARIO
    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var listaMascotas = await _context.Mascotas.ToListAsync();
        return Ok(listaMascotas);
      }
      catch (Exception ex)
      {

        return BadRequest(ex.Message);
      }
    }

    // BUSCAR MASCOTA POR ID
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
      try
      {
        var mascota = await _context.Mascotas.FindAsync(id);
        if (mascota == null) { NotFound(); }
        return Ok(mascota);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // ELINMINAR MASCOTA
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      try
      {
        var mascota = await _context.Mascotas.FindAsync(id);
        if (mascota == null) { NotFound(); }
        else
        {
          _context.Mascotas.Remove(mascota);
          await _context.SaveChangesAsync();
        }
        return Ok(mascota);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // EDICION DE MASCOTA
    [HttpPost]
    public async Task<IActionResult> Post(Mascotas mascotas)
    {
      try
      {
        mascotas.fechaCreacion = DateTime.Now;
        _context.Add(mascotas);
        await _context.SaveChangesAsync();
        return CreatedAtAction("Get", new { id = mascotas.Id}, mascotas);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Mascotas mascotas)
    {
      try
      {
        if(id!= mascotas.Id) { return BadRequest(); }

        var mascotaitem = await _context.Mascotas.FindAsync(id);
        if (mascotaitem == null) {  return NotFound(); }

        mascotaitem.nombre = mascotas.nombre;
        mascotaitem.especie = mascotas.especie;
        mascotaitem.raza = mascotas.raza;
        mascotaitem.fechaNacimiento = mascotas.fechaNacimiento;
        mascotaitem.IdDueno = mascotas.IdDueno;

        await _context.SaveChangesAsync();

        return NoContent();
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

  }
}
